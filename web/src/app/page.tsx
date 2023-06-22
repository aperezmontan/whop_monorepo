"use client";

import { useState } from 'react';

import type { Note } from '@/gql/graphql';
import CreateNote from './CreateNote';
import ShowNotes from './ShowNotes';

export default function Home() {  
  let [notes, setNotes] = useState<Note[]>([])

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <CreateNote notes={notes} setNotes={setNotes}/>
      <ShowNotes notes={notes} setNotes={setNotes}/>
    </main>
  )
}
