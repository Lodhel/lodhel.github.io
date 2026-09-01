import type { Achievement } from '@/types/content'

const ecologyCertificate = new URL(
  '../assets/certificates/photo_2025-03-27_20-25-35 (2).jpg',
  import.meta.url
).href
const hackAndChangeCertificate = new URL(
  '../assets/certificates/Хакатон Hack&Change 2024 - Диплом Татаринов Роман.pdf',
  import.meta.url
).href

// Файлы без однозначного названия оставлены в assets/certificates и могут быть
// привязаны здесь после ручной проверки соответствия событию.
export const achievements: Achievement[] = [
  {
    title: 'Лауреат премии Мэра',
    event: 'LCT 2025 · трек «Город»',
    result: 'Лауреат',
    year: '2025',
    description: 'Результат участия в хакатоне «Лидеры цифровой трансформации».'
  },
  {
    title: 'Международный хакатон по экологии',
    event: 'Экотон «Зелёный код Москвы»',
    result: 'Победитель',
    year: '2024',
    description: 'Победа в кейсе «Зелёная перепись».',
    certificateImage: ecologyCertificate
  },
  {
    title: 'Hack&Change',
    event: 'Hack&Change',
    result: 'Победитель',
    year: '2024',
    description: 'Победа в хакатоне.',
    certificateImage: hackAndChangeCertificate
  },
  {
    title: 'Всероссийское соревнование по биометрии',
    event: 'Соревнование по биометрии',
    result: '2 место',
    year: '—',
    description: 'Второе место во всероссийском соревновании.'
  },
  {
    title: 'ВТБ 2023',
    event: 'Хакатон ВТБ',
    result: '3 место',
    year: '2023',
    description: 'Третье место в хакатоне.'
  },
  {
    title: 'Digital Breakthroughs',
    event: 'Digital Breakthroughs',
    result: 'Финалист',
    year: '—',
    description: 'Выход в финал соревнования.'
  }
]
