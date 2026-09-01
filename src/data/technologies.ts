import type { TechnologyGroup } from '@/types/content'

export const technologies: TechnologyGroup[] = [
  { title: 'Backend', items: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'REST API'] },
  {
    title: 'AI',
    items: ['LLM', 'RAG', 'Vector Search', 'Retrieval', 'AI Agents', 'Context Engineering']
  },
  { title: 'Infrastructure', items: ['Docker', 'Linux', 'Nginx', 'GitLab CI/CD'] },
  { title: 'Frontend', items: ['Vue', 'JavaScript', 'TypeScript'] }
]

export const highlights = [
  { title: 'Backend', stack: 'Python · FastAPI · Django' },
  { title: 'AI Engineering', stack: 'LLM · RAG · Retrieval' },
  { title: 'Agent Systems', stack: 'Agents · Tools · Orchestration' },
  { title: 'Infrastructure', stack: 'Docker · Linux · CI/CD' }
]

export const engineeringAreas = [
  {
    number: '01',
    title: 'Backend Engineering',
    description:
      'Проектирование и разработка backend-систем, API, интеграций и сервисной архитектуры.',
    technologies: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'REST', 'Integrations']
  },
  {
    number: '02',
    title: 'AI / LLM Engineering',
    description:
      'Интеграция LLM в продукты, RAG-системы, retrieval, работа с контекстом, оценка качества и проектирование AI-пайплайнов.',
    technologies: ['LLM', 'RAG', 'Vector Search', 'Retrieval', 'Context Engineering', 'Evaluation']
  },
  {
    number: '03',
    title: 'Agent Systems',
    description:
      'AI-агенты, использование инструментов, оркестрация задач, multi-agent workflows и проектирование автономных процессов.',
    technologies: ['Agents', 'Tools', 'Orchestration', 'Multi-Agent Systems']
  },
  {
    number: '04',
    title: 'Infrastructure',
    description: 'Развёртывание, эксплуатация и отладка production-систем.',
    technologies: ['Docker', 'Linux', 'Nginx', 'CI/CD', 'Monitoring', 'Deployment']
  }
]
