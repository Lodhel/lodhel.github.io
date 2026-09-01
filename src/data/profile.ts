import type { ContactLink } from '@/types/content'

// TODO: замените пустые значения на реальные адреса перед публикацией.
export const profile = {
  name: 'Роман Татаринов',
  shortName: 'РТ',
  role: 'Backend Engineer · AI / LLM Engineering',
  positioning:
    'Разрабатываю backend-системы, AI-продукты и инженерную инфраструктуру. Сейчас углубляюсь в LLM, RAG и архитектуру агентных систем.',
  photoAlt: 'Роман Татаринов',
  marker: ['Python', 'Backend', 'LLM', 'RAG', 'Agents'],
  githubUrl: '',
  telegramUrl: '',
  email: ''
}

export const contacts: ContactLink[] = [
  { label: 'GitHub', url: profile.githubUrl, kind: 'github' },
  { label: 'Telegram', url: profile.telegramUrl, kind: 'telegram' },
  { label: 'Email', url: profile.email ? `mailto:${profile.email}` : '', kind: 'email' }
]

export const navigation = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Направления', href: '#areas' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Достижения', href: '#achievements' },
  { label: 'Сейчас изучаю', href: '#focus' },
  { label: 'Контакты', href: '#contacts' }
]

export const aboutParagraphs = [
  'Я backend-разработчик с сильным интересом к архитектуре, инфраструктуре и AI-системам.',
  'Мой инженерный фундамент — Python, backend-разработка, API, базы данных, интеграции и эксплуатация сервисов.',
  'Сейчас значительная часть моего профессионального развития связана с LLM Engineering: RAG, retrieval-пайплайнами, context engineering и управлением AI-агентами.',
  'Больше всего меня интересует точка пересечения классической разработки и AI: когда модель становится не отдельной демо-функцией, а частью полноценной инженерной системы.'
]
