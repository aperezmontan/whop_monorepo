"use client";

import { useEffect } from 'react';
import type { Note } from '@/gql/graphql';
import type { Dispatch, SetStateAction } from 'react';
 
export default function ShowNotes({ notes, setNotes }: { notes: Note[], setNotes: Dispatch<SetStateAction<Note[]>>}) {
  const GET_NOTES = `
    query {
      notes {
        id
        subject
        body
      }
    }
  `

  useEffect(() => {
    fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GET_NOTES,
      }),
    })
    .then((res) => res.json())
    .catch((error) => console.error(error))
    .then((respJson) => {
      if (respJson) {
        const fetchedNotes = respJson.data.notes;  
        setNotes(fetchedNotes.map((note: Note) => note))
      }
    })
  }, [])

  return (
    <div className='NOTES-CONTAINER flex flex-col'>
      <div className="flex text-3xl justify-center pb-4">Notes</div>
      <div className="flex flex-col gap-4">
        {notes.map(({id, subject, body}: Note) => {
          return <div key={id} className="relative flex flex-col gap-2">
            <div className="font-mono font-bold text-xl">{`${subject}`}</div>
            <div className="font-mono">{`${body}`}</div>
          </div>
        })}
      </div>
    </div>
  )
};
