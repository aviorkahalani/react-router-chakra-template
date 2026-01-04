import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router with Chakra UI!' },
  ]
}

export default function Home() {
  return <h1>Home Page</h1>
}
