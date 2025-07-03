# Como Configurar Google Forms para Receber Dados do Formulário

## Passo 1: Criar o Google Forms

1. Acesse [Google Forms](https://forms.google.com)
2. Crie um novo formulário
3. Adicione os seguintes campos:
   - **Nome** (Resposta curta)
   - **Sobrenome** (Resposta curta)
   - **Número de WhatsApp** (Resposta curta)
   - **E-mail Corporativo** (Resposta curta)
   - **Link do Site** (Resposta curta)
   - **Aceita os termos de uso** (Múltipla escolha: Sim/Não)

## Passo 2: Descobrir os IDs dos Campos

1. Abra o Google Forms que você criou
2. Clique em "Visualizar" no canto superior direito
3. Abra as ferramentas de desenvolvedor do navegador (F12)
4. Na aba Network, preencha o formulário e envie
5. Procure por uma requisição para `formResponse`
6. Nos dados da requisição, você verá os IDs dos campos no formato `entry.XXXXXXXXX`

### Exemplo de como encontrar os IDs:
```
entry.123456789: "João"          // Campo Nome
entry.987654321: "Silva"         // Campo Sobrenome
entry.456789123: "11999999999"   // Campo WhatsApp
entry.789123456: "joao@email.com" // Campo Email
entry.321654987: "https://site.com" // Campo Site
entry.654987321: "Sim"           // Campo Termos
```

## Passo 3: Obter a URL do Formulário

1. No Google Forms, vá em "Respostas"
2. Clique nos três pontos (...) e em "Obter link pré-preenchido"
3. Preencha qualquer coisa nos campos e clique em "Obter link"
4. A URL será algo como: `https://docs.google.com/forms/d/e/1FAIpQLSe.../viewform?usp=pp_url&entry.123456789=teste`
5. Substitua `/viewform` por `/formResponse` para obter a URL de envio

## Passo 4: Atualizar o Código

No arquivo `DemoPage.tsx`, substitua os valores na função `submitToGoogleForms`:

```typescript
const GOOGLE_FORMS_URL = "https://docs.google.com/forms/d/e/SEU_FORM_ID_AQUI/formResponse";

const FIELD_IDS = {
  nome: "entry.SEU_ID_AQUI",        // Substitua pelo ID real
  sobrenome: "entry.SEU_ID_AQUI",   // Substitua pelo ID real
  whatsapp: "entry.SEU_ID_AQUI",    // Substitua pelo ID real
  email: "entry.SEU_ID_AQUI",       // Substitua pelo ID real
  siteLink: "entry.SEU_ID_AQUI",    // Substitua pelo ID real
  aceitaTermos: "entry.SEU_ID_AQUI" // Substitua pelo ID real
};
```

## Passo 5: Configurar Respostas (Opcional)

1. No Google Forms, vá em "Respostas"
2. Clique no ícone do Google Sheets para criar uma planilha
3. Todas as respostas serão automaticamente salvas na planilha

## Alternativas de Implementação

### Opção 1: Google Forms (Implementada)
- ✅ Gratuito
- ✅ Fácil de configurar
- ✅ Integração automática com Google Sheets
- ❌ Limitado em customização

### Opção 2: Google Sheets API
```typescript
// Exemplo de implementação alternativa
const submitToGoogleSheets = async (data) => {
  const response = await fetch('https://script.google.com/macros/s/SEU_SCRIPT_ID/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
```

### Opção 3: Backend Próprio
```typescript
// Exemplo de implementação com backend próprio
const submitToBackend = async (data) => {
  const response = await fetch('https://seu-backend.com/api/demo-requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
```

## Testando a Integração

1. Preencha o formulário no app
2. Clique em "Solicitar Demonstração"
3. Verifique se os dados aparecem no Google Forms/Sheets
4. Monitore o console do navegador para erros

## Troubleshooting

### Erro de CORS
- Normal quando usando `mode: "no-cors"`
- Se o envio não funcionar, verifique os IDs dos campos

### Dados não aparecem
- Verifique se a URL do formulário está correta
- Confirme se os IDs dos campos estão corretos
- Teste preenchendo o Google Forms manualmente primeiro

### Para produção
- Considere implementar um backend próprio para maior controle
- Use Google Apps Script para lógica mais complexa
- Implemente validação do lado servidor
