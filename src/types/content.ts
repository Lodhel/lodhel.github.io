export interface ContactLink {
  label: string
  url: string
  kind: 'telegram' | 'email'
}

export interface Achievement {
  title: string
  event: string
  result: string
  year: string
  description: string
  organizers?: string
  certificateImage?: string
  certificateImageWidth?: number
  certificateImageHeight?: number
  externalUrl?: string
}
