import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/

const apiMiddleware = () => {
  return {
    name: 'api-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/submit' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body);
              
              // 1. Send to Custom Bot
              const botWebhookUrl = 'https://open.feishu.cn/open-apis/bot/v2/hook/ee392eca-c2d3-4735-ad35-9dfe9063813c';
              const feishuMessage = {
                msg_type: "text",
                content: {
                  text: `🆕 Новая заявка с сайта CEBC!\n\n🏢 Компания: ${data.companyName}\n👤 Имя: ${data.contactPerson}\n💼 Должность: ${data.position}\n📧 Email: ${data.email}\n📱 Телефон: ${data.mobile}\n🌐 Сайт: ${data.website || 'Не указан'}\n🏭 Отрасль: ${data.industry || 'Не указана'}\n🌍 Интересующие рынки: ${data.markets?.length > 0 ? data.markets.join(', ') : 'Не указаны'}\n📝 Потребности:\n${data.needs || 'Нет дополнительных деталей'}`
                }
              };

              fetch(botWebhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(feishuMessage)
              }).catch(e => console.error("Webhook Error:", e));

              // 2. Add to Bitable
              const appId = 'cli_aa3c8bfee6f8dd05';
              const appSecret = 'eaMgTWUTp3fOSVxxR4lsGef1RcB751Wj';
              
              const tokenRes = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ app_id: appId, app_secret: appSecret })
              });
              const tokenData = await tokenRes.json();
              const token = tokenData.tenant_access_token;

              const appToken = 'U8DXb0YyLaTTOXs5pqqchGVznye';
              const tableId = 'tblbx7Vgp8EJIYRM';
              const insertRes = await fetch(`https://open.feishu.cn/open-apis/bitable/v1/apps/${appToken}/tables/${tableId}/records`, {
                method: 'POST',
                headers: { 
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                  fields: {
                    "Company": data.companyName || "",
                    "Contact Person": data.contactPerson || "",
                    "Position": data.position || "",
                    "Email": data.email || "",
                    "Mobile": data.mobile || "",
                    "Website": data.website || "",
                    "Industry": data.industry || "",
                    "Markets": data.markets?.length > 0 ? data.markets.join(', ') : "",
                    "Needs": data.needs || ""
                  }
                })
              });
              const insertData = await insertRes.json();
              console.log("Bitable Response:", insertData);
              
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch (error) {
              console.error(error);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: 'Failed' }));
            }
          });
        } else {
          next();
        }
      });
    }
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), apiMiddleware()],
})
