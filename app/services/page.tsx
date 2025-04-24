import Link from "next/link"
import Image from "next/image"
import { Eye, ArrowRight, Search, FileText, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600">Comprehensive eye care solutions powered by advanced AI technology</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-teal-100 shadow-lg">
              <CardHeader className="pb-4">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Cataract Screening</CardTitle>
                <CardDescription>Fast and accurate AI-powered detection</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our primary service uses advanced AI algorithms to analyze eye images and detect early signs of
                  cataracts with high accuracy. Get results in seconds, not days.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Try Now</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-teal-100 shadow-lg">
              <CardHeader className="pb-4">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Detailed Reports</CardTitle>
                <CardDescription>Comprehensive analysis and recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Receive detailed reports with your screening results, including personalized recommendations and next
                  steps for your eye health journey.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Learn More</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-teal-100 shadow-lg">
              <CardHeader className="pb-4">
                <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Specialist Referrals</CardTitle>
                <CardDescription>Connect with qualified ophthalmologists</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  If our screening detects potential issues, we can connect you with qualified ophthalmologists in your
                  area for professional follow-up care.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/contact">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Find Specialists</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Services</h2>
                <p className="text-gray-600 mb-6">
                  For healthcare providers and organizations, we offer premium services with additional features and
                  capabilities.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">API access for integration with existing systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">Bulk image processing capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">Custom reporting and analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">Priority support and dedicated account manager</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    Contact for Enterprise
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Medical professionals using OptiScan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">How accurate is the cataract detection?</h3>
                <p className="text-gray-600">
                  Our AI model has been trained on thousands of eye images and validated by ophthalmologists, achieving
                  over 95% accuracy in clinical trials.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Is this a replacement for seeing a doctor?</h3>
                <p className="text-gray-600">
                  No, our service is designed for screening purposes only. We always recommend following up with a
                  healthcare professional for a comprehensive examination.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">How do I take a good eye image?</h3>
                <p className="text-gray-600">
                  We recommend using good lighting, focusing clearly on the eye, and taking the photo straight-on
                  without flash to get the best results.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">Is my data secure and private?</h3>
                <p className="text-gray-600">
                  Yes, we take data privacy seriously. All images are encrypted, processed securely, and never shared
                  with third parties without your explicit consent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-800 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
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
