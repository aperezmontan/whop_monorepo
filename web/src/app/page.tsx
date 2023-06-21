import type { Note } from '@/gql/graphql';

let formattedNotes: Note[] = [];

const GET_NOTES = `
  query {
    notes {
      id
      subject
      body
    }
  }
`

export default function Home() {
  console.log("Making request to GRAPHQL")
  fetch('http://127.0.0.1:3000/graphql', {
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
  .then(({data: { notes }}) => {
    formattedNotes = notes.map((note: Note) => {
      return note;
    })
  })
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex text-3xl">NOTES</div>
      <div className="flex flex-col gap-4">
        {formattedNotes.map(({subject, body}: Note) => {
          return <div className="relative flex flex-col gap-2">
            <div className="font-mono font-bold text-xl">{`${subject}`}</div>
            <div className="font-mono">{`${body}`}</div>
          </div>
        })}
      </div>
    </main>
  )
}
