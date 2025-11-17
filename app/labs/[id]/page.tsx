import { LabViewer } from "@/components/lab-viewer"

export default async function LabDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <LabViewer labId={id} />
}
