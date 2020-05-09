import url from './URL'

export default async () => {
  const jsonresponse = await fetch(`${url}/produks`)
    .then()
    .catch((err) => console.error(err))

  const produks = await jsonresponse.json()
  if (produks.error) {
    return []
  }
  return produks
}
