# 🌿 GreenV

> Monitoramento Inteligente de Vegetação em Rodovias

O **GreenV** é uma solução mobile corporativa desenvolvida para otimizar e automatizar o monitoramento do crescimento da vegetação às margens das rodovias, garantindo mais segurança e eficiência na manutenção viária.

---

## O Problema
A falta de visibilidade e os riscos causados pelo crescimento descontrolado da vegetação nas rodovias representam um perigo constante. Atualmente, o monitoramento para identificar trechos que necessitam de roçada costuma ser manual, o que gera atrasos, relatórios imprecisos e uma lentidão crítica na tomada de decisão para o envio das equipes de manutenção.

## A Solução
Um aplicativo focado em usabilidade de campo com design minimalista, permitindo que os agentes rodoviários apenas realizem o upload de vídeos do trajeto. O sistema assume o trabalho complexo: processa os vídeos, extrai os frames e utiliza reconhecimento de imagem para classificar automaticamente a altura da vegetação, plotando os resultados em um mapa de gestão interativo.

## Persona
**Carlos, 45 anos - Inspetor de Conservação Rodoviária**
Funcionário de campo que passa a maior parte do turno dirigindo pela malha viária. Ele precisa de ferramentas diretas, rápidas e sem distrações ou formulários complexos. Seu principal objetivo é documentar a situação da rodovia rapidamente, fazer o upload e confiar que o sistema analisará e reportará os dados à central.

---

## Funcionalidades

### Autenticação Restrita
* **Acesso Exclusivo Corporativo:** Por ser uma ferramenta de uso estritamente interno, **não existe tela de criação de conta (Sign-up)** no app. O acesso é concedido de forma centralizada apenas para funcionários que já estão previamente cadastrados e validados no banco de dados da empresa.

### Home (Dashboard do Funcionário)
* Visão geral direta e minimalista do trabalho do agente.
* Resumo rápido de suas rotinas, métricas de produtividade e status do turno atual.

### Upload e Processamento de Imagens
* Interface limpa para envio de vídeos (MP4 ou MOV) capturados nas vias.
* **Análise por Frames:** O sistema realiza a separação automática do vídeo em diversos quadros (frames).
* **Reconhecimento de Padrões:** Cada frame é analisado para identificar o nível exato da vegetação e possíveis obstruções (com indicativos de nível de confiança da leitura).

### Mapeamento e Acompanhamento
* Tela interativa dedicada ao acompanhamento georreferenciado das rodovias.
* Painel de malha viária indicando exatamente a proporção de trechos saudáveis, em atenção ou críticos.
* Filtros e visão clara de quantos metros ou quilômetros da rodovia precisam de intervenção.

## 📋 Requisitos Principais

### Funcionais
- Upload de vídeos
- Processamento automático
- Mapeamento geográfico
- Classificação de vegetação

### Não Funcionais
- Interface simples
- Processamento eficiente
- Compatibilidade Android

## Níveis de Classificação da Vegetação

Para facilitar a triagem e o envio das equipes de manutenção, a inteligência do app classifica a grama/vegetação em três níveis visuais e gerenciais:

* 🟢 **Baixo (Curto):** Vegetação controlada e dentro dos padrões de segurança. 
* 🟠 **Médio (Atenção):** A vegetação está crescendo (ex: atingindo 2,6m) e o trecho precisa entrar no radar de manutenção futura.
* 🔴 **Alto (Crítico):** A grama está alta o suficiente para gerar riscos operacionais (esconder placas, reduzir visibilidade ou encobrir animais). Exige ação imediata de roçada.

## ProtÓtipo figma
https://www.figma.com/design/lVJExT1IOtFD2HEJTX9F85/Challenge-Motiva?node-id=163-384&t=AWaV78ic9flHe7Vu-1

# Integrantes
- Helena Barbosa Costa 562450
- Henrique Mandrick  562715
- Mateus Scandiuzzi Valente Tomomitsu 561565
- Ryan Amorim de Castro Santana 564393
- Thomas Joh Kobayashi 562758
