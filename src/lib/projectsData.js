export const projectsData = [
  {
    slug: 'aws-native-ai-assistant', // 唯一标识符，用于 URL
    title: 'AWS Native Enterprise AI Assistant',
    category: 'CLOUD',
    period: 'Sep 2025 - Oct 2025',
    description: "A RAG-based AI assistant using AWS Lambda, API Gateway, and Amazon Bedrock. Features streamed responses and enterprise-grade security via AWS WAF.",
    image: '/PersonalWebsite/frontend_Website.png',
    techStack: ['AWS Lambda', 'Amazon Bedrock', 'API Gateway', 'RAG', 'Python'],
    // 详情页的详细内容（你可以随后扩展成 MDX，现在先用长文本）
    content: `
      ## Overview
      This project demonstrates a fully serverless architecture...
      
      ## Key Features
      - **RAG Architecture**: Retrieval-Augmented Generation...
      - **Security**: AWS WAF integration...
    `
  },
  {
    slug: 'whatsapp-intelligent-assistant',
    title: 'WhatsApp Intelligent Assistant',
    category: 'APP',
    period: 'Sep 2025 - Oct 2025',
    description: 'Hybrid Stateful-Stateless architecture using Go (WhatsMeow) on EC2 and Bedrock Agents. Includes Function Calling for real-time automation.',
    image: '/PersonalWebsite/whatsapp-16-9.png',
    techStack: ['Go (Golang)', 'EC2', 'Bedrock Agents', 'Function Calling'],
    content: `
      ## Architecture
      This bot runs on a t3.micro EC2 instance...
    `
  },
];