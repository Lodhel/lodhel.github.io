export interface ContactLink {
  label: string
  url: string
  kind: 'github' | 'telegram' | 'email'
}

export interface Achievement {
  title: string
  event: string
  result: string
  year: string
  description: string
  organizers?: string
  certificateImage?: string
  externalUrl?: string
}

export interface TechnologyGroup {
  title: string
  items: string[]
}
