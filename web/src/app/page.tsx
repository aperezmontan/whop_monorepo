import CreateNote from './CreateNote';
import ShowNotes from './ShowNotes';

export default function Home() {  
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <CreateNote />
      <ShowNotes />
    </main>
  )
}
