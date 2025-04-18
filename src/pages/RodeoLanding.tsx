import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CalendarIcon,
  MapPinIcon,
  Clock3Icon,
  TicketIcon,
  InfoIcon,
  StarIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
} from "lucide-react";

const RodeoLanding = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Helmet>
        <title>Wild West Rodeo - The Ultimate Rodeo Experience</title>
        <meta
          name="description"
          content="Join us for an unforgettable Wild West Rodeo experience with bull riding, barrel racing, and more!"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-800/70 to-amber-950/90 z-10" />
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520374458547-72212f070984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"
          style={{ backgroundPosition: "center 30%" }}
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-7xl md:text-8xl font-extrabold text-amber-100 tracking-tight drop-shadow-lg mb-4 font-serif">
              WILD WEST
              <br />
              <span className="text-red-600">RODEO</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-200 max-w-2xl mx-auto font-medium">
              Experience the thrill of the ultimate Western showdown with bull
              riding, barrel racing, and bronco busting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                size="lg"
                className="bg-red-700 hover:bg-red-800 text-white font-bold text-lg px-8 rounded-md border-2 border-amber-100/30"
              >
                Get Tickets
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-amber-100 border-2 border-amber-100/70 hover:bg-amber-900/40 font-bold text-lg px-8 rounded-md"
              >
                View Schedule
              </Button>
            </div>
          </motion.div>
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-8 h-12 border-2 border-amber-200 rounded-full flex justify-center">
                <span className="block w-1 h-3 bg-amber-200 rounded-full mt-2 animate-bounce" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-serif text-center">
              The Greatest Rodeo Show On Earth
            </h2>
            <div className="w-24 h-1 bg-red-600 mb-8"></div>
            <p className="text-lg md:text-xl text-amber-800 max-w-3xl text-center">
              Join us for three days of non-stop action, Western traditions, and
              family fun at the annual Wild West Rodeo Championship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md border-none overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-amber-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1575908539614-ff89490f4a78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-amber-100 font-bold text-xl">
                  Bull Riding
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-amber-800">
                  Watch as brave cowboys attempt to stay mounted on a bucking
                  bull for 8 seconds in one of rodeo's most thrilling events.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md border-none overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-amber-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581376282014-4a4cbf40164b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-amber-100 font-bold text-xl">
                  Barrel Racing
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-amber-800">
                  Experience the speed and precision as riders navigate their
                  horses around barrels in a cloverleaf pattern in this timed
                  event.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md border-none overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-amber-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604400339250-4d0c3626ed8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-amber-100 font-bold text-xl">
                  Bronc Riding
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-amber-800">
                  Witness cowboys battle to stay aboard powerful bucking horses
                  using only a specialized saddle and one hand.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-amber-900 text-amber-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-center">
              Event Schedule
            </h2>
            <div className="w-24 h-1 bg-red-600 mb-8"></div>
            <p className="text-lg md:text-xl max-w-3xl text-center">
              Plan your visit with our complete three-day schedule of rodeo
              performances and special events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-amber-800 border-amber-700 text-amber-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  <h3 className="text-xl font-bold">Friday, October 20</h3>
                </div>
                <ul className="space-y-4">
                  <li className="border-l-2 border-red-600 pl-4 py-1">
                    <div className="flex items-start">
                      <Clock3Icon className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">
                          11:00 AM - 2:00 PM
                        </span>
                        <p className="text-amber-200">
                          Western Fair & Food Vendors
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="border-l-2 border-red-600 pl-4 py-1">
                    <div className="flex items-start">
                      <Clock3Icon className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">2:30 PM - 4:00 PM</span>
                        <p className="text-amber-200">
                          Junior Rodeo Competition
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="border-l-2 border-red-600 pl-4 py-1">
                    <div className="flex items-start">
                      <Clock3Icon className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">
                          7:00 PM - 10:00 PM
                        </span>
                        <p className="text-amber-200">
                          Main Event: Bull Riding Preliminary
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-amber-800 border-amber-700 text-amber-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  <h3 className="text-xl font-bold">Saturday, October 21</h3>
                </div>
                <ul className="space-y-4">
                  <li className="border-l-2 border-red-600 pl-4 py-1">
                    <div className="flex items-start">
                      <Clock3Icon className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">
                          10:00 AM - 12:00 PM
                        </span>
                        <p className="text-amber-200">
                          Cowboy Breakfast & Meet the Riders
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="border-l-2 border-red-600 pl-4 py-1">
                    <div className="flex items-start">
                      <Clock3Icon className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">1:00 PM - 4:00 PM</span>
                        <p className="text-amber-200">
                          Barrel Racing & Bronc Riding
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="border-l-2 border-red-600 pl-4 py-1">
                    <div className="flex items-start">
                      <Clock3Icon className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">
                          7:00 PM - 10:30 PM
                        </span>
                        <p className="text-amber-200">
                          Championship Rodeo & Live Country Music
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-amber-800 border-amber-700 text-amber-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  <h3 className="text-xl font-bold">Sunday, October 22</h3>
                </div>
                <ul className="space-y-4">
                  <li className="border-l-2 border-red-600 pl-4 py-1">
                    <div className="flex items-start">
                      <Clock3Icon className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">
                          11:00 AM - 1:00 PM
                        </span>
                        <p className="text-amber-200">
                          Western Heritage Exhibition
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="border-l-2 border-red-600 pl-4 py-1">
                    <div className="flex items-start">
                      <Clock3Icon className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">2:00 PM - 4:30 PM</span>
                        <p className="text-amber-200">
                          Team Roping & Steer Wrestling
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="border-l-2 border-red-600 pl-4 py-1">
                    <div className="flex items-start">
                      <Clock3Icon className="mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">5:30 PM - 8:00 PM</span>
                        <p className="text-amber-200">
                          Finals & Awards Ceremony
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button className="bg-red-700 hover:bg-red-800 text-white font-bold border-2 border-amber-100/30 px-8 py-6 text-lg rounded-md">
              <TicketIcon className="mr-2 h-5 w-5" />
              Book Your Tickets Now
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-amber-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-serif text-center">
              Rodeo Memories
            </h2>
            <div className="w-24 h-1 bg-red-600 mb-8"></div>
            <p className="text-lg md:text-xl text-amber-800 max-w-3xl text-center">
              Relive the excitement and thrills from our previous rodeo events.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1581264692612-2100c0ddf855?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                alt="Bull riding action shot"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1547117640-5a50de5953f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                alt="Cowboy silhouette at sunset"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1526402978125-f1d6df91cbac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                alt="Barrel racing competition"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1499852346568-d6209b802139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                alt="Rodeo clown entertaining crowd"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1545023678-9a4384fa40b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                alt="Cowboy hat on fence"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1516685546577-2c36c50df657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                alt="Western boots collection"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1570021975098-3e9e8f5fc196?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                alt="Rider preparing for event"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1497993950456-cdb57afd1cf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                alt="Rodeo arena at night"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button
              variant="outline"
              className="border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-amber-100 font-bold px-8 py-6 text-lg rounded-md"
            >
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-serif text-center">
              What People Say
            </h2>
            <div className="w-24 h-1 bg-red-600 mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md border-none p-2">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className="h-5 w-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-amber-800 mb-6 italic">
                  "My family had an amazing time at the Wild West Rodeo! The
                  bull riding competition was intense, and my kids loved the
                  junior rodeo activities. Can't wait to come back next year!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-800 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/42.jpg"
                      alt="Sarah Johnson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-amber-900">Sarah Johnson</p>
                    <p className="text-sm text-amber-700">Dallas, Texas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md border-none p-2">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className="h-5 w-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-amber-800 mb-6 italic">
                  "As a long-time rodeo fan, I have to say this is one of the
                  best organized events I've attended. Top-notch riders, great
                  food, and an authentic Western atmosphere made for an
                  unforgettable weekend!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-800 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Mike Thompson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-amber-900">Mike Thompson</p>
                    <p className="text-sm text-amber-700">Austin, Texas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md border-none p-2">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className="h-5 w-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-amber-800 mb-6 italic">
                  "First time attending a rodeo and it exceeded all my
                  expectations! The atmosphere was electric, and everyone was so
                  friendly. The barrel racing was my favorite event. Definitely
                  coming back!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-800 rounded-full overflow-hidden mr-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/65.jpg"
                      alt="Jennifer Martinez"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-amber-900">
                      Jennifer Martinez
                    </p>
                    <p className="text-sm text-amber-700">San Antonio, Texas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tickets & Location Section */}
      <section
        className="py-20 bg-[url('https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')]
       bg-cover bg-center relative"
      >
        <div className="absolute inset-0 bg-amber-900/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-amber-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <TicketIcon className="h-8 w-8 text-red-600 mr-4" />
                <h3 className="text-3xl font-bold text-amber-900 font-serif">
                  Tickets
                </h3>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between border-b border-amber-300 pb-4">
                  <div>
                    <p className="font-bold text-amber-900 text-lg">
                      Single Day Pass
                    </p>
                    <p className="text-amber-700">
                      Access to all events for one day
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-red-600">$45</p>
                </div>
                <div className="flex justify-between border-b border-amber-300 pb-4">
                  <div>
                    <p className="font-bold text-amber-900 text-lg">
                      Weekend Pass
                    </p>
                    <p className="text-amber-700">
                      Full access for all three days
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-red-600">$120</p>
                </div>
                <div className="flex justify-between border-b border-amber-300 pb-4">
                  <div>
                    <p className="font-bold text-amber-900 text-lg">
                      VIP Package
                    </p>
                    <p className="text-amber-700">
                      Premium seating, meet & greet, exclusive merchandise
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-red-600">$250</p>
                </div>
                <div className="flex justify-between pb-4">
                  <div>
                    <p className="font-bold text-amber-900 text-lg">
                      Family Pack
                    </p>
                    <p className="text-amber-700">
                      2 adults + 2 children, single day
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-red-600">$150</p>
                </div>
                <Button className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 text-lg rounded-md">
                  Purchase Tickets
                </Button>
                <p className="text-sm text-amber-700 text-center">
                  Children under 5 enter free with a paying adult
                </p>
              </div>
            </div>

            <div className="bg-amber-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <MapPinIcon className="h-8 w-8 text-red-600 mr-4" />
                <h3 className="text-3xl font-bold text-amber-900 font-serif">
                  Location & Info
                </h3>
              </div>
              <div className="rounded-lg overflow-hidden h-48 mb-6">
                <div className="h-full w-full bg-amber-200 flex items-center justify-center">
                  <p className="text-amber-800 font-medium">
                    [Interactive Map]
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex">
                  <MapPinIcon className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                  <p className="text-amber-800">
                    <span className="font-bold">Dusty Trail Arena</span>
                    <br />
                    1234 Rodeo Drive, Tumbleweed County, TX 75001
                  </p>
                </div>
                <div className="flex">
                  <CalendarIcon className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                  <p className="text-amber-800">
                    <span className="font-bold">Event Dates:</span>
                    <br />
                    October 20-22, 2023
                  </p>
                </div>
                <div className="flex">
                  <InfoIcon className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                  <p className="text-amber-800">
                    <span className="font-bold">Additional Information:</span>
                    <br />
                    Free parking available. Food and beverages available for
                    purchase. Outside food and drinks not permitted.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-amber-50 font-bold py-4 text-lg rounded-md mt-4"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & Footer */}
      <section className="py-16 bg-amber-900 text-amber-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Stay Updated
            </h2>
            <p className="text-lg text-amber-200 mb-6">
              Subscribe to our newsletter for exclusive updates, special offers,
              and early access to ticket sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-md bg-amber-800 text-amber-100 border border-amber-700 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <Button className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-md">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="border-t border-amber-800 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 font-serif">
                  Wild West Rodeo
                </h3>
                <p className="text-amber-200 mb-6">
                  The ultimate rodeo experience bringing the spirit of the West
                  to life through thrilling competitions and family
                  entertainment.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-amber-200 hover:text-white">
                    <FacebookIcon className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-amber-200 hover:text-white">
                    <InstagramIcon className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-amber-200 hover:text-white">
                    <TwitterIcon className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-amber-200 hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-amber-200 hover:text-white">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-amber-200 hover:text-white">
                      Schedule
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-amber-200 hover:text-white">
                      Tickets
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-amber-200 hover:text-white">
                      Gallery
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Information</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-amber-200 hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-amber-200 hover:text-white">
                      Competitors
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-amber-200 hover:text-white">
                      Sponsorship
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-amber-200 hover:text-white">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-amber-200 hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <MapPinIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span className="text-amber-200">
                      1234 Rodeo Drive, Tumbleweed County, TX 75001
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <span className="text-amber-200">
                      info@wildwestrodeo.com
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <span className="text-amber-200">(555) 123-4567</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-amber-800 mt-12 pt-8 text-center">
              <p className="text-amber-300 text-sm">
                © {new Date().getFullYear()} Wild West Rodeo. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RodeoLanding;
