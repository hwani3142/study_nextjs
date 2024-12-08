export default async function DynamicMeals({ params }) {
  const { slug } = await params;

  return (
    <main>
      <h1>dynamic meals!</h1>
      <p>{slug}</p>
    </main>
  );
}
