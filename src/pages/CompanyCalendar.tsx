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
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&src=YWRtaW5AY21hY3Jvb2ZpbmcuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y18wM2RhYjMwNDZmNWVkNzc1NzNmOTYwYzQ1M2Q5Y2FlYTY2Njk3N2M0ZDE5YTY3YzZhNzZlMTc3Zjg5OTQ0N2Y5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y18zZWQ4YTZlYWMzYWRkMGRjM2YwOGYwOTU4ODQ2ZTUxYjM5ZWQ0MDQ1Nzc4N2U4YTBiMGFkNjViOGY5M2ZiMTEyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19hZDhlNDM4NjU4YmVjNWZiMTIxZjMwN2YyNDdkZjNkNmFlZTQ3NDA1NzhkNWYzNTE5Zjc5NjBjZTg3NGY3MmEzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y18yOWU3YjZjM2NjNjc5ZGE3ODQ0MzkxYjkyNmVkYzM3YjNiYzAwOTcyYjVlNzE5ODQ1ZGU4NDA1OWNjNWQ2MzdhQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19lZTVhOTRiMzI4YWVmMGRlYzcyMzI5MmE1ODBhZGZlNzQ3ODYwNTA5ZjFlMTc5MWUxMDMwYjJkZDJkMzM0NjFlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y18zM2FkMjhiYzUxNzhmNWQ0ZjZjMzY4YzdmMzQzMjljZWFiZjUyYjFlYTk0ZGZiNTFkZWM3YjRlODg0NzUxZWM1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19hZWY2OWIwODdmM2UyZThhYzg4ZGQ4YjFmMzJlMjQ0NTVlMjFmY2ZlZDFiZTkyNDcwYThlZWY2NWFmNWNjYzIwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y18xODQwM2U2MjI0MDg1MzU2ZTFmZjJiZmU0MGFkYThlOWQwMGE0YmU4ODY5NDNjOWM1MjU0OWIwYjBkN2Y0NDUwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y18wOWRmMTM2YjVkYWU0ZWIyZGRkYjkxYmVmZTY5NjI5OGFkZWI1OWFjOWFmNGZlMWMwZmJjZWIwOThkODY4M2U3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19mZDAwNzRmYTlmYTc1NzQxN2Y4MmJjNTRiNzM0MzhiOThjYzMwMGEwNzI0NDI1OGNlNjk0OWE4MWMyZDUxYjBjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19mZWQxMTJiMTRlZWM2YjQzYjNkMmYzODE4MWU3NGExYWFkNzczYjEyMGEwMGQ5YjNkODhiNDM1ZTg0NDcyMTYwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y18xM2I2NGRmN2VhYTk0Y2M1MGJjYWE0ZDhlZWI3NjlkZmEzZTVmZjgxZmIxMjEyMDlmZjkyZWQ2MjFiMmY0ZWU2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y181YTI3Yjg5OWJiMjQ0YzdjMzRlOGVkZjFhYzQzN2NjODk5OTQ2YWEyZDg1YTk3MjAwZmYzYmVmYzI0OTE2MmJjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y18wYzU2NzM3MzEyYjZhM2Y0MzljOWJlNjAwOGQzYTk1OTg0ZmZjYmRjNzQ3NTliNTU3NTJkZTBiMWIxODJkYTBjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%23C0CA33&color=%23F6BF26&color=%23D81B60&color=%23E67C73&color=%23D50000&color=%23009688&color=%234285F4&color=%23C0CA33&color=%234285F4&color=%239E69AF&color=%23D50000&color=%23F4511E&color=%23A79B8E&color=%23EF6C00&color=%23E67C73&color=%23E67C73&color=%23E67C73&color=%234285F4&color=%23EF6C00&color=%234285F4&color=%238E24AA&color=%237CB342&color=%238E24AA&color=%23AD1457&color=%23795548&color=%23EF6C00&color=%239E69AF&color=%23AD1457&color=%23EF6C00&color=%23AD1457&color=%23B39DDB&color=%23EF6C00&color=%230B8043" 
          style={{ border: 'solid 1px #777' }} 
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