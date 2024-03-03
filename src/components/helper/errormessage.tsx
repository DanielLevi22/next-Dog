export function ErrorMessage({message}: { message: string}) {
  if(!message) null

  return <p style={{ color: '#f31', margin: '1rem 0'}}>{message}</p>
}