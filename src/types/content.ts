export interface ContactLink {
  label: string
  url: string
  kind: 'github' | 'telegram' | 'email'
}

export interface Project {
  title: string
  description: string
  longDescription?: string
  category: string
  technologies: string[]
  githubUrl: string
  externalUrl: string
  image?: string
  featured: boolean
  year?: string
}

export interface Achievement {
  title: string
  event: string
  result: string
  year: string
  description: string
  certificateImage?: string
  externalUrl?: string
}

export interface FocusItem {
  title: string
  note: string
}
export interface TechnologyGroup {
  title: string
  items: string[]
}
