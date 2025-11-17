import { GameViewer } from "@/components/game-viewer"

export default async function GameDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <GameViewer gameId={id} />
}
