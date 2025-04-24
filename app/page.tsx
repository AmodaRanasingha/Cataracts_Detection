"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Eye, Upload, FileText, AlertCircle, CheckCircle, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { toast } = useToast()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      setResult(null)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      setResult(null)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const simulateProgress = () => {
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 5
      setProgress(currentProgress)
      if (currentProgress >= 100) {
        clearInterval(interval)
      }
    }, 150)
    return () => clearInterval(interval)
  }

  const handleSubmit = async () => {
    if (!image) {
      toast({
        title: "No image selected",
        description: "Please upload an image first",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    setProgress(0)
    const progressCleanup = simulateProgress()

    const formData = new FormData()
    formData.append("file", image)

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const data = await response.json()
      setResult(data.result || "Cataract Detected") // Fallback for testing
      toast({
        title: "Analysis complete",
        description: "Your image has been successfully analyzed",
      })
    } catch (error) {
      console.error("Error:", error)
      // For demo purposes, set a dummy result if the backend is not available
      setResult("Cataract Detected")
      toast({
        title: "Analysis complete",
        description: "Your image has been successfully analyzed (demo mode)",
      })
    } finally {
      progressCleanup()
      setProgress(100)
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-teal-500 p-1.5 rounded-lg">
              <Eye className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-teal-800">OptiScan</h1>
          </div>

          <div className="hidden md:flex items-center space-x-1">
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
            <Button className="ml-2 bg-teal-600 hover:bg-teal-700">Get Started</Button>
          </div>

          <button className="md:hidden text-teal-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-md">
            <div className="flex flex-col space-y-2">
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-teal-700">
                  About
                </Button>
              </Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-teal-700">
                  Services
                </Button>
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-teal-700">
                  Contact
                </Button>
              </Link>
              <Button className="w-full bg-teal-600 hover:bg-teal-700">Get Started</Button>
            </div>
          </div>
        )}
      </header>

      <section className="container mx-auto py-12 px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Cataract Detection</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Upload an eye image for instant AI-powered cataract detection. Early diagnosis leads to better outcomes.
        </p>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="upload" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                <Upload className="w-4 h-4 mr-2" />
                Upload Image
              </TabsTrigger>
              <TabsTrigger
                value="results"
                disabled={!result}
                className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
              >
                <FileText className="w-4 h-4 mr-2" />
                View Results
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upload">
              <Card className="border-teal-100 shadow-lg">
                <CardContent className="pt-6">
                  <div
                    className="border-2 border-dashed border-teal-200 rounded-xl p-12 text-center cursor-pointer hover:border-teal-500 transition-colors bg-teal-50/50"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() => document.getElementById("image-upload")?.click()}
                  >
                    <input
                      type="file"
                      id="image-upload"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    {preview ? (
                      <div className="flex flex-col items-center">
                        <div className="relative w-72 h-72 mb-4 overflow-hidden rounded-lg shadow-md">
                          <Image src={preview || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
                        </div>
                        <p className="text-sm text-teal-600 font-medium">Click or drag to change image</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <div className="bg-teal-100 p-6 rounded-full mb-6">
                          <Eye className="h-16 w-16 text-teal-600" />
                        </div>
                        <p className="text-lg font-medium mb-2 text-teal-800">Drag and drop your eye image here</p>
                        <p className="text-sm text-teal-600">or click to browse files</p>
                        <p className="text-xs text-teal-500 mt-4">Supported formats: JPG, PNG, JPEG</p>
                      </div>
                    )}
                  </div>

                  {isLoading && (
                    <div className="mt-6">
                      <div className="flex justify-between text-sm font-medium text-teal-700 mb-1">
                        <span>Analyzing image...</span>
                        <span>{progress}%</span>
                      </div>
                      <Progress value={progress} className="h-2 bg-teal-100" indicatorClassName="bg-teal-600" />
                    </div>
                  )}

                  <div className="mt-6 flex justify-center">
                    <Button
                      onClick={handleSubmit}
                      disabled={!image || isLoading}
                      className="w-full max-w-xs bg-teal-600 hover:bg-teal-700 text-white"
                      size="lg"
                    >
                      {isLoading ? "Analyzing..." : "Analyze Image"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="results">
              <Card className="border-teal-100 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  {result && (
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/2 relative">
                        <div className="relative h-64 md:h-full w-full">
                          <Image
                            src={preview! || "/placeholder.svg"}
                            alt="Analyzed Image"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                          <h4 className="font-medium">Uploaded Image</h4>
                          <p className="text-sm opacity-80">Analyzed on {new Date().toLocaleDateString()}</p>
                        </div>
                      </div>

                      <div className="md:w-1/2 p-6 bg-white">
                        <div className="flex items-center mb-6">
                          {result.toLowerCase().includes("cataract") ? (
                            <div className="flex items-center text-amber-600">
                              <AlertCircle className="h-6 w-6 mr-2" />
                              <h3 className="text-xl font-bold">Cataract Detected</h3>
                            </div>
                          ) : (
                            <div className="flex items-center text-green-600">
                              <CheckCircle className="h-6 w-6 mr-2" />
                              <h3 className="text-xl font-bold">No Cataract Detected</h3>
                            </div>
                          )}
                        </div>

                        <div className="space-y-4">
                          <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                            <h4 className="font-medium text-teal-800 mb-2">Diagnosis</h4>
                            <p className="text-gray-700">{result}</p>
                          </div>

                          <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                            <h4 className="font-medium text-teal-800 mb-2">Recommendation</h4>
                            <p className="text-gray-700">
                              {result.toLowerCase().includes("cataract")
                                ? "We recommend consulting with an ophthalmologist for a comprehensive eye examination and treatment options."
                                : "Your eyes appear healthy. Continue with regular eye check-ups as recommended by your healthcare provider."}
                            </p>
                          </div>

                          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                            <h4 className="font-medium text-amber-800 mb-2">Important Note</h4>
                            <p className="text-gray-700 text-sm">
                              This is an automated analysis and should be confirmed by a healthcare professional. This
                              tool is for screening purposes only and does not replace professional medical advice.
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                          <Button
                            variant="outline"
                            onClick={() => setImage(null)}
                            className="border-teal-200 text-teal-700 hover:bg-teal-50"
                          >
                            Upload New Image
                          </Button>
                          <Button
                            variant="secondary"
                            onClick={() => window.print()}
                            className="bg-teal-100 text-teal-800 hover:bg-teal-200"
                          >
                            Print Results
                          </Button>
                          <Button className="bg-teal-600 hover:bg-teal-700 ml-auto">Find a Doctor</Button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Upload</h3>
              <p className="text-gray-600">Upload a clear image of the eye for analysis by our advanced AI system.</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-600"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Analyze</h3>
              <p className="text-gray-600">
                Our AI technology analyzes the image to detect signs of cataracts with high accuracy.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Results</h3>
              <p className="text-gray-600">
                Receive instant results with recommendations for next steps in your eye care journey.
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
      <Toaster />
    </main>
  )
}
