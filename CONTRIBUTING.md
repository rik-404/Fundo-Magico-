# Contribuindo para o Projeto Fundo Mágico

Obrigado pelo seu interesse em contribuir! Este guia vai te ajudar a começar.

## 🚀 Como Começar

### 1. Fork e Clone

```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/seu-usuario/szpc-fundo-magico-js.git
cd szpc-fundo-magico-js

# Adicione o repositório original como upstream
git remote add upstream https://github.com/usuario-original/szpc-fundo-magico-js.git
```

### 2. Configuração do Ambiente

```bash
# Inicie o servidor local
python3 -m http.server 8000

# Acesse http://localhost:8000
# Verifique se tudo está funcionando
```

## 📋 Processo de Contribuição

### 1. Crie uma Branch

```bash
# Crie uma branch para sua feature
git checkout -b feature/sua-feature

# Ou para um bugfix
git checkout -b bugfix/correcao-do-bug
```

### 2. Faça as Mudanças

- **Siga o estilo existente** de código
- **Teste suas mudanças** localmente
- **Documente novas funcionalidades**
- **Mantenha a consistência** com o design atual

### 3. Teste

- **Teste funcional** - Verifique se a geração de backgrounds funciona
- **Teste visual** - Confirme que o glassmorphism está correto
- **Teste responsivo** - Teste em diferentes tamanhos de tela
- **Teste cross-browser** - Chrome, Firefox, Safari, Edge

### 4. Commit

```bash
# Adicione as mudanças
git add .

# Commit com mensagem clara
git commit -m "feat: add nova animação de gradiente"

# Push para seu fork
git push origin feature/sua-feature
```

### 5. Pull Request

- **Use título claro** e descritivo
- **Descreva as mudanças** no corpo do PR
- **Adicione screenshots** se for uma mudança visual
- **Link issues** relacionadas se houver

## 🎨 Diretrizes de Código

### CSS
- **Use variáveis CSS** para cores repetidas
- **Mantenha consistência** no glassmorphism
- **Comente estilos complexos**
- **Use nomes descritivos** para classes

### JavaScript
- **Use ES6+** features
- **Comente funções complexas**
- **Mantenha código limpo** e legível
- **Evite código duplicado**

### HTML
- **Use semântica HTML5**
- **Mantenha estrutura limpa**
- **Use atributos ARIA** quando necessário
- **Valide HTML** regularmente

## 🐛 Reportando Bugs

### 1. Verifique Issues Existentes

- [Busque](https://github.com/usuario-original/szpc-fundo-magico-js/issues) issues abertos
- Verifique se o bug já foi reportado

### 2. Crie uma Nova Issue

Use este template:

```markdown
## Descrição do Bug
Breve descrição do problema

## Passos para Reproduzir
1. Vá para '...'
2. Clique em '....'
3. Veja erro

## Comportamento Esperado
O que deveria acontecer

## Comportamento Atual
O que está acontecendo

## Screenshots
Se aplicável, adicione screenshots

## Ambiente
- OS: [ex: Windows 10, macOS Big Sur]
- Browser: [ex: Chrome 91, Firefox 89]
- Versão: [ex: v1.0.0]

## Informações Adicionais
Contexto adicional sobre o problema
```

## 💡 Sugestões de Features

### 1. Discussão Primeiro

- [Abra uma issue](https://github.com/usuario-original/szpc-fundo-magico-js/issues) para discussão
- Espere feedback da comunidade
- Evite trabalhar em silêncio

### 2. Proposta de Feature

Use este template:

```markdown
## Descrição da Feature
Descrição clara da nova funcionalidade

## Problema que Resolve
Que problema esta feature resolve?

## Solução Proposta
Como você sugere implementar

## Alternativas
Outras abordagens consideradas

## Mockups/Screenshots
Se aplicável

## Impacto
Como isso afeta o projeto
```

## 🏷️ Labels Comuns

- `bug` - Bugs e correções
- `enhancement` - Melhorias existentes
- `feature` - Novas funcionalidades
- `documentation` - Mudanças na docs
- `design` - Mudanças visuais
- `performance` - Otimizações
- `good first issue` - Bom para iniciantes
- `help wanted` - Precisa de ajuda

## 📝 Estilo de Commits

Use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Mudanças na documentação
- `style:` - Mudanças de estilo (formatação, etc)
- `refactor:` - Refatoração
- `test:` - Adição de testes
- `chore:` - Mudanças de build, manutenção

Exemplos:
```
feat: add matrix binary effect
fix: correct glassmorphism blur on mobile
docs: update contributing guidelines
style: format css with prettier
```

## 🎯 Áreas que Precisam de Ajuda

- [ ] **Testes automatizados** - Criar suite de testes
- [ ] **Documentação** - Melhorar docs existentes
- [ ] **Performance** - Otimizar geração de backgrounds
- [ ] **Acessibilidade** - Melhorar suporte a leitores de tela
- [ ] **Internacionalização** - Suporte a múltiplos idiomas
- [ ] **Exportação** - Baixar backgrounds gerados

## 🤝 Código de Conduta

- **Seja respeitoso** com todos os contribuidores
- **Seja construtivo** nas críticas
- **Seja paciente** com novos contribuidores
- **Foque no que** é melhor para a comunidade
- **Respeite** opiniões diferentes

## 📞 Contato

Se tiver dúvidas:

- **Abra uma issue** para perguntas gerais
- **Discuta no PR** para mudanças específicas
- **Use as discussions** para ideias gerais

---

## 🙏 Obrigado!

Sua contribuição é muito apreciada! Cada PR, issue e comentário ajuda a melhorar o projeto.
