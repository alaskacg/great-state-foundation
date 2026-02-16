import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Heart, Users, BookOpen, Leaf, TrendingUp, Menu, X, ChevronRight, DollarSign, Award, Target } from 'lucide-react'
import { useState } from 'react'

function App() {
  return (
    <Router basename="/great-state-foundation">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-emerald-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-emerald-400" />
            <span className="text-xl font-bold">Great State Foundation</span>
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-emerald-300 transition">Home</Link>
            <Link to="/programs" className="hover:text-emerald-300 transition">Programs</Link>
            <Link to="/impact" className="hover:text-emerald-300 transition">Impact</Link>
            <Link to="/contact" className="hover:text-emerald-300 transition">Contact</Link>
            <Link to="/donate" className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg font-semibold transition">
              Donate
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block hover:text-emerald-300" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/programs" className="block hover:text-emerald-300" onClick={() => setIsOpen(false)}>Programs</Link>
            <Link to="/impact" className="block hover:text-emerald-300" onClick={() => setIsOpen(false)}>Impact</Link>
            <Link to="/contact" className="block hover:text-emerald-300" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/donate" className="block hover:text-emerald-300" onClick={() => setIsOpen(false)}>Donate</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-emerald-400" />
              <span className="font-bold">Great State Foundation</span>
            </div>
            <p className="text-slate-400 text-sm">Building a brighter future for all Alaskans.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <div className="space-y-2 text-sm">
              <Link to="/programs" className="block text-slate-400 hover:text-white">Education</Link>
              <Link to="/programs" className="block text-slate-400 hover:text-white">Environment</Link>
              <Link to="/programs" className="block text-slate-400 hover:text-white">Community</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Get Involved</h3>
            <div className="space-y-2 text-sm">
              <Link to="/donate" className="block text-slate-400 hover:text-white">Donate</Link>
              <Link to="/impact" className="block text-slate-400 hover:text-white">Impact</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p>Anchorage, Alaska</p>
              <p>(907) 555-0300</p>
              <p>info@greatstatefoundation.com</p>
              <p className="text-xs mt-4">501(c)(3) Nonprofit • EIN: 92-XXXXXXX</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Great State Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Great State Foundation - Building Alaska's Future</title>
        <meta name="description" content="Great State Foundation: Supporting education, environmental conservation, and community development across Alaska. Donate today to make an impact." />
      </Helmet>

      <Navigation />

      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-teal-800 to-blue-900"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        
        <div className="relative z-10 text-center container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Building Alaska's Future</h1>
          <p className="text-xl md:text-2xl mb-8 text-emerald-200">Supporting education, environment, and community since 1985</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate" className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-lg font-semibold transition inline-flex items-center">
              <Heart className="mr-2 h-5 w-5" /> Donate Now
            </Link>
            <Link to="/programs" className="bg-white text-emerald-900 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition">
              Our Programs
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">$12M+</div>
              <div className="text-slate-600">Grants Awarded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-slate-600">Programs Funded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">100K+</div>
              <div className="text-slate-600">Lives Impacted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">38</div>
              <div className="text-slate-600">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Our Focus Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Education Grants</h3>
              <p className="text-slate-600">Supporting Alaska students with scholarships, educational programs, and school improvements.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition">
              <Leaf className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Environmental Conservation</h3>
              <p className="text-slate-600">Protecting Alaska's wilderness, wildlife habitats, and promoting sustainable practices.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Community Development</h3>
              <p className="text-slate-600">Building stronger communities through infrastructure, health services, and economic development.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Make an Impact Today</h2>
          <p className="text-xl mb-8 text-emerald-100">Your donation supports vital programs across Alaska.</p>
          <Link to="/donate" className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition">
            <DollarSign className="mr-2" /> Donate Now <ChevronRight className="ml-2" />
          </Link>
          <p className="mt-6 text-sm text-emerald-200">Tax-deductible • 501(c)(3) nonprofit</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Programs - Great State Foundation</title>
        <meta name="description" content="Great State Foundation programs supporting education, environment, and community development." />
      </Helmet>
      <Navigation />
      
      <div className="bg-emerald-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl text-emerald-100">Making a difference across Alaska</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {[
          {
            title: 'Education Excellence',
            icon: BookOpen,
            color: 'blue',
            programs: [
              'K-12 scholarships ($500K annually)',
              'Teacher development grants',
              'STEM program funding',
              'Library improvements',
              'Technology access initiatives'
            ]
          },
          {
            title: 'Environmental Conservation',
            icon: Leaf,
            color: 'green',
            programs: [
              'Habitat restoration projects',
              'Clean energy initiatives',
              'Wildlife protection programs',
              'Climate research funding',
              'Sustainable practices education'
            ]
          },
          {
            title: 'Community Development',
            icon: Users,
            color: 'purple',
            programs: [
              'Rural infrastructure grants',
              'Health clinic support',
              'Arts & culture funding',
              'Small business incubators',
              'Youth development programs'
            ]
          }
        ].map((program, idx) => (
          <div key={idx} className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <program.icon className={`h-12 w-12 text-${program.color}-600`} />
              <h2 className="text-3xl font-bold text-slate-900">{program.title}</h2>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <ul className="grid md:grid-cols-2 gap-4">
                {program.programs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <ChevronRight className={`h-5 w-5 text-${program.color}-600 flex-shrink-0 mt-0.5`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}

function DonatePage() {
  const [amount, setAmount] = useState('100')
  const [frequency, setFrequency] = useState('once')

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Donate - Great State Foundation</title>
        <meta name="description" content="Support Great State Foundation with a tax-deductible donation. Your gift makes a difference." />
      </Helmet>
      <Navigation />
      
      <div className="bg-emerald-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Donate</h1>
          <p className="text-xl text-emerald-100">Your gift transforms lives across Alaska</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Make Your Donation</h2>
              
              <div className="bg-white border rounded-xl p-8 shadow-lg">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-3">Donation Frequency</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setFrequency('once')}
                      className={`px-4 py-3 rounded-lg font-semibold transition ${
                        frequency === 'once'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      One-Time
                    </button>
                    <button
                      onClick={() => setFrequency('monthly')}
                      className={`px-4 py-3 rounded-lg font-semibold transition ${
                        frequency === 'monthly'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-3">Amount</label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {['25', '100', '250', '500', '1000', '2500'].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setAmount(amt)}
                        className={`px-4 py-2 rounded-lg font-semibold transition ${
                          amount === amt
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    placeholder="Custom amount"
                  />
                </div>

                <button className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition text-lg">
                  Donate ${amount} {frequency === 'monthly' && '/month'}
                </button>

                <p className="text-sm text-slate-500 mt-4 text-center">
                  Secure donation processing via Stripe
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Your Impact</h2>
              
              <div className="space-y-4">
                {[
                  { amount: 25, impact: 'Provides school supplies for one student' },
                  { amount: 100, impact: 'Funds environmental education program for 20 students' },
                  { amount: 250, impact: 'Supports community health clinic for one week' },
                  { amount: 500, impact: 'Funds full scholarship for trade school student' },
                  { amount: 1000, impact: 'Supports rural infrastructure improvement project' },
                  { amount: 2500, impact: 'Funds comprehensive environmental restoration project' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-emerald-50 p-4 rounded-lg">
                    <div className="font-bold text-emerald-700">${item.amount}</div>
                    <div className="text-slate-600 text-sm">{item.impact}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-slate-100 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-slate-900">Tax Information</h3>
                <p className="text-sm text-slate-600">
                  Great State Foundation is a 501(c)(3) nonprofit organization. 
                  All donations are tax-deductible to the fullest extent allowed by law. 
                  You will receive a tax receipt via email.
                </p>
                <p className="text-xs text-slate-500 mt-3">EIN: 92-XXXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

function ImpactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Impact - Great State Foundation</title>
        <meta name="description" content="See the impact of Great State Foundation across Alaska." />
      </Helmet>
      <Navigation />
      
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Impact</h1>
          <p className="text-xl text-slate-300">Measuring success through real results</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { metric: '$12.5M', label: 'Total Grants (2023)' },
            { metric: '487', label: 'Programs Funded' },
            { metric: '105,000', label: 'Alaskans Served' },
            { metric: '95%', label: 'Program Efficiency' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center bg-emerald-50 p-8 rounded-xl">
              <div className="text-4xl font-bold text-emerald-700 mb-2">{stat.metric}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 p-12 rounded-xl">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <Award className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Rural Education Initiative</h3>
              <p className="text-slate-600">Improved graduation rates by 35% in 12 rural communities through comprehensive support programs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Leaf className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Habitat Restoration</h3>
              <p className="text-slate-600">Restored 15,000 acres of wildlife habitat, benefiting salmon populations and local ecosystems.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact - Great State Foundation</title>
        <meta name="description" content="Contact Great State Foundation for grant applications or partnership inquiries." />
      </Helmet>
      <Navigation />
      
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300">Get in touch with our team</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500">
                  <option>Grant Application</option>
                  <option>Partnership Inquiry</option>
                  <option>Donation Question</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"></textarea>
              </div>
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition font-semibold">
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900">Office</h3>
                <p className="text-slate-600">
                  Great State Foundation<br />
                  500 Philanthropy Plaza<br />
                  Anchorage, AK 99501
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900">Contact</h3>
                <p className="text-slate-600">
                  Phone: (907) 555-0300<br />
                  Email: info@greatstatefoundation.com<br />
                  Grants: grants@greatstatefoundation.com
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900">Hours</h3>
                <p className="text-slate-600">
                  Monday - Friday: 9 AM - 5 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
