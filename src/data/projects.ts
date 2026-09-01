import type { Project } from '@/types/content'

// TODO: замените примеры реальными проектами, ссылками и изображениями.
export const projects: Project[] = [
  {
    title: 'AI Project Intelligence Layer',
    description:
      'Система анализа состояния программных проектов: технический долг, hotspots, инженерное здоровье, динамика разработки и AI-анализ проекта.',
    category: 'AI / Analytics / Engineering',
    technologies: ['AI Analysis', 'Engineering Analytics', 'Project Intelligence'],
    githubUrl: '',
    externalUrl: '',
    featured: true
  },
  {
    title: 'RAG System',
    description:
      'Архитектура поиска и генерации ответов на основе собственной базы знаний с retrieval-пайплайном и векторным поиском.',
    category: 'LLM / RAG',
    technologies: ['LLM', 'RAG', 'Retrieval', 'Vector Search'],
    githubUrl: '',
    externalUrl: '',
    featured: true
  },
  {
    title: 'Agent Orchestration',
    description:
      'Система управления AI-агентами и распределения задач между специализированными агентами.',
    category: 'Agents / Orchestration',
    technologies: ['Agents', 'Tools', 'Orchestration', 'Multi-Agent'],
    githubUrl: '',
    externalUrl: '',
    featured: true
  },
  {
    title: 'Backend Platform',
    description:
      'Backend-система с несколькими сервисами, интеграциями, платёжной логикой и production-инфраструктурой.',
    category: 'Backend / Architecture',
    technologies: ['Backend', 'API', 'Integrations', 'Infrastructure'],
    githubUrl: '',
    externalUrl: '',
    featured: true
  }
]
