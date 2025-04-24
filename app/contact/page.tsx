import Link from "next/link"
import { Eye, Mail, Phone, MapPin, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-teal-500 p-1.5 rounded-lg">
              <Eye className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-teal-800">OptiScan</h1>
          </Link>

          <div className="flex items-center space-x-1">
            <Link href="/about">
              <Button variant="ghost" className="text-teal-700 hover:text-teal-900 hover:bg-teal-50">
                About
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="ghost" className="text-teal-700 hover:text-teal-900 hover:bg-teal-50">
                Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="text-teal-700 hover:text-teal-900 hover:bg-teal-50">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">Have questions or need assistance? We're here to help.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <Card className="border-teal-100 shadow-lg">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Subject" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message" rows={5} />
                    </div>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-6">
                  We'd love to hear from you. Whether you have questions about our services, need technical support, or
                  want to explore partnership opportunities, our team is ready to assist.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-teal-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">info@optiscan.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-teal-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-teal-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        123 Eye Care Lane
                        <br />
                        Medical District, MD 12345
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-teal-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-900">Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9am - 5pm
                        <br />
                        Saturday: 10am - 2pm
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">For Healthcare Providers</h2>
                <p className="text-gray-600 mb-4">
                  Interested in implementing OptiScan in your practice? Contact our enterprise team for custom solutions
                  and integration options.
                </p>
                <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
                  Enterprise Inquiries
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-teal-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">How quickly will I receive a response?</h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please call our
                support line.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Do you offer technical support?</h3>
              <p className="text-gray-600">
                Yes, our technical support team is available during business hours to assist with any issues you may
                encounter.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Can I request a demo?</h3>
              <p className="text-gray-600">
                Healthcare providers can request a personalized demo of our enterprise solutions. Please use the
                Enterprise Inquiries form.
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2">Do you have international support?</h3>
              <p className="text-gray-600">
                Yes, we provide support to users worldwide. For region-specific inquiries, please mention your location
                in your message.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-teal-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white p-1 rounded">
                  <Eye className="h-5 w-5 text-teal-800" />
                </div>
                <h3 className="text-xl font-bold">OptiScan</h3>
              </div>
              <p className="text-teal-100 text-sm">
                Advanced AI-powered cataract detection for early diagnosis and better eye health outcomes.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-teal-100">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Contact</h4>
              <address className="not-italic text-teal-100 space-y-2 text-sm">
                <p>123 Eye Care Lane</p>
                <p>Medical District, MD 12345</p>
                <p>Email: info@optiscan.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Newsletter</h4>
              <p className="text-teal-100 text-sm mb-2">Stay updated with our latest news and advancements.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 text-sm rounded-l-md text-gray-900 w-full"
                />
                <Button className="rounded-l-none bg-teal-600 hover:bg-teal-500">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-teal-700 mt-8 pt-8 text-center text-teal-100 text-sm">
            <p>© 2024 OptiScan. All rights reserved.</p>
            <p className="mt-2">
              This tool is for screening purposes only and does not replace professional medical advice.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
