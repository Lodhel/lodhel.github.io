import type { Achievement } from '@/types/content'

const biometricsCertificate = new URL('../assets/certificates/1.pdf', import.meta.url).href
const greenCodeCertificate = new URL('../assets/certificates/2.jpg', import.meta.url).href
const innovationCentersCertificate = new URL('../assets/certificates/3.pdf', import.meta.url).href
const lctCertificate = new URL('../assets/certificates/4.pdf', import.meta.url).href
const hackAndChangeCertificate = new URL('../assets/certificates/5.pdf', import.meta.url).href
const strongIdeasCertificate = new URL('../assets/certificates/6.png', import.meta.url).href

export const achievements: Achievement[] = [
  {
    title: 'Всероссийский хакатон по биометрии',
    event: 'Кейс Центра биометрических технологий',
    result: '2 место',
    year: '2024',
    description:
      'Разработка ассистента для упрощения регистрации в Единой биометрической системе.',
    certificateImage: biometricsCertificate
  },
  {
    title: 'Международный экотон «Зелёный код Москвы»',
    event: 'Кейс «Зелёная перепись»',
    result: '1 место',
    year: '2024',
    description: 'Разработка решения для цифровой инвентаризации зелёных насаждений Москвы.',
    certificateImage: greenCodeCertificate
  },
  {
    title: 'Форум инновационных центров',
    event: 'Всероссийский хакатон ФИЦ 2024',
    result: '1 место',
    year: '2024',
    description: 'Цифровой сервис для ведения реестра зелёных насаждений города Москвы.',
    certificateImage: innovationCentersCertificate
  },
  {
    title: 'Премия Мэра Москвы «Лидеры цифровой трансформации»',
    event: 'Хакатон ЛЦТ 2025',
    result: 'Финалист',
    year: '2025',
    description:
      'Программное обеспечение для определения состояния зелёных насаждений города по фотографиям.',
    certificateImage: lctCertificate
  },
  {
    title: 'Hack & Change',
    event: 'Трек «Web: Data API» от Сбера',
    result: '1 место',
    year: '2024',
    description:
      'Разработка Data API для сокращения времени внедрения новых моделей в production.',
    certificateImage: hackAndChangeCertificate
  },
  {
    title: 'Сильные идеи для нового времени',
    event: 'Форум 2025',
    result: 'Автор идеи',
    year: '2025',
    description:
      'Цифровая платформа для восстановления лесов и управления зелёными насаждениями в России.',
    organizers: 'АСИ · Росконгресс',
    certificateImage: strongIdeasCertificate
  }
]
