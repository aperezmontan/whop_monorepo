"use client";

import { useEffect, useState } from 'react';
import type { Note } from '@/gql/graphql';
 
export default function ShowNotes() {
  let [notes, setNotes] = useState<Note[]>([])

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
    console.log("Making request to GRAPHQL")

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
      console.log("respJson", respJson)

      if (respJson) {
        const fetchedNotes = respJson.data.notes;
        console.log("fetchedNotes", fetchedNotes)
  
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
