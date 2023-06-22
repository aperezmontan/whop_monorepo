"use client";

import type { Note } from '@/gql/graphql';
import type { Dispatch, SetStateAction } from 'react';

interface FormElements extends HTMLFormControlsCollection {
  subject: HTMLInputElement;
  body: HTMLTextAreaElement;
}

interface NoteFormElement extends HTMLFormElement {
  readonly elements: FormElements
}
 
export default function CreateNote({ notes, setNotes }: { notes: Note[], setNotes: Dispatch<SetStateAction<Note[]>>}) {
  const createNotePayload = ({ subject, body }: { subject: string, body: string }) => (
    `mutation {
      createNote(input: {
        subject: "${subject}",
        body: "${body}",
      }) {
        note {
          id
          subject
          body
        }
        errors
        }
      }
    `
  )

  const createNote = async (event: React.SyntheticEvent<NoteFormElement>) => {
    event.preventDefault();

    const newNote = {
      subject: event.currentTarget.elements.subject.value,
      body: event.currentTarget.elements.body.value,
    }

    fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: createNotePayload(newNote),
      }),
    })
    .then((res) => res.json())
    .catch((error) => console.error(error))
    .then((respJson) => {
      if (respJson) {
        const createdNote = respJson.data.createNote.note;  
        setNotes([ ...[createdNote], ...notes ])
      }
    })
  }

  // const handleChange = (event: ChangeEvent) => {
  //   const { name, value } = event.currentTarget;

  //   setNote({ ...note, ...{ [name]: value } })
	// };

  return (
    <div className='flex flex-col gap-2'>
      <div className="flex text-3xl justify-center">Create Note</div>
      <form className='flex flex-col gap-2' onSubmit={createNote}>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input id="subject" className="text-black" type="text" placeholder='A Story'/>
        </div>
        <textarea className="text-black" name="body" placeholder='Once upon a time...'></textarea>
        <button type="submit" className="btn bg-slate-500">Create Note</button>
      </form>
    </div>
  )
};
