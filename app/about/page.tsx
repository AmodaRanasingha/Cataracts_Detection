import Link from "next/link"
import Image from "next/image"
import { Eye, ArrowRight, Award, Users, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About OptiScan</h1>
            <p className="text-xl text-gray-600">
              Revolutionizing cataract detection through advanced AI technology for better eye health outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At OptiScan, we're committed to making early cataract detection accessible to everyone. Our mission is
                to leverage cutting-edge AI technology to provide accurate, fast, and affordable eye health assessments,
                empowering individuals to take control of their eye health before vision problems become severe.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that early detection is key to preventing vision loss and maintaining quality of life. By
                providing a simple, user-friendly platform for cataract screening, we aim to reduce the global burden of
                preventable blindness.
              </p>
              <Link href="/services">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Medical professionals"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Award className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                Our AI models are trained on diverse datasets and validated by ophthalmologists to ensure the highest
                accuracy in cataract detection.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Users className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-600">
                We're committed to making eye health assessments accessible to everyone, regardless of location or
                socioeconomic status.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Clock className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our technology to provide the most accurate and user-friendly cataract detection
                service available.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Team</h2>
            <p className="text-gray-600 mb-12 text-center">
              OptiScan was founded by a team of ophthalmologists, AI researchers, and healthcare professionals dedicated
              to improving global eye health through technology.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Dr. Sarah Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900">Dr. Sarah Johnson</h3>
                <p className="text-sm text-gray-600">Chief Medical Officer</p>
              </div>
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Dr. Michael Chen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900">Dr. Michael Chen</h3>
                <p className="text-sm text-gray-600">AI Research Director</p>
              </div>
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Emma Rodriguez"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900">Emma Rodriguez</h3>
                <p className="text-sm text-gray-600">Chief Technology Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-800 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to check your eye health?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards better eye health with our AI-powered cataract detection service.
          </p>
          <Link href="/">
            <Button className="bg-white text-teal-800 hover:bg-teal-100">Try OptiScan Now</Button>
          </Link>
        </div>
      </section>

      <footer className="bg-teal-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p>© 2024 OptiScan. All rights reserved.</p>
          <p className="text-sm text-teal-200 mt-2">
            This tool is for screening purposes only and does not replace professional medical advice.
          </p>
        </div>
      </footer>
    </main>
  )
}
