import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function CompanyCalendar() {
  return (
    <div className="min-h-screen bg-background p-6">
      <Button variant="outline" asChild className="mb-6">
        <Link href="/">
          <a className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Resource Center
          </a>
        </Link>
      </Button>
      <h1 className="text-4xl font-bold mb-6">Company Calendar</h1>
      <Card className="w-full overflow-hidden">
        <iframe 
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&src=YWRtaW5AY21hY3Jvb2ZpbmcuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%23C0CA33&color=%23F6BF26&color=%23D81B60&color=%23E67C73&color=%23D50000&color=%23009688&color=%234285F4&color=%23C0CA33&color=%234285F4&color=%239E69AF&color=%23D50000&color=%23F4511E&color=%23A79B8E&color=%23EF6C00&color=%23E67C73&color=%23E67C73&color=%23E67C73&color=%234285F4&color=%23EF6C00&color=%234285F4&color=%238E24AA&color=%237CB342&color=%238E24AA&color=%23AD1457&color=%23795548&color=%23EF6C00&color=%239E69AF&color=%23AD1457&color=%23EF6C00&color=%23AD1457&color=%23B39DDB&color=%23EF6C00&color=%230B8043" 
          style={{border: 'solid 1px #777'}} 
          width="100%" 
          height={600} 
          frameBorder="0" 
          scrolling="no"
          className="dark:invert"
        />
      </Card>
    </div>
  )
}