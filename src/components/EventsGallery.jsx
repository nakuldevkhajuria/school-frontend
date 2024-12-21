import React, { useState } from "react";
import {
  Calendar,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Loader,
} from "lucide-react";
import headerImage from "../assets/headerImage.png";
import { useGetEventsQuery } from "../store/apiSlice";

const filters = [
  { label: "All", bgColor: "blue" },
  { label: "Plantation day", bgColor: "blue" },
  { label: "Annual day", bgColor: "blue" },
  { label: "Sports day", bgColor: "blue" },
  { label: "NCC (National cadet corps)", bgColor: "blue" },
  { label: "Science labs", bgColor: "blue" },
  { label: "Alumni association", bgColor: "blue" },
  { label: "Cleanliness drive", bgColor: "blue" },
];

const EventGallery = () => {
  const {
    data: events = { data: [] },
    isLoading,
    isError,
  } = useGetEventsQuery();
  const [selectedFilter, setSelectedFilter] = useState(filters[0].label);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCloseModal = () => setSelectedEvent(null);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? events.data.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === events.data.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="w-12 h-12 animate-spin text-blue-500" />
      </div>
    );
  if (isError) return <div>Error fetching events</div>;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex justify-center items-center">
        <img
          src={headerImage}
          alt="Students in classroom"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-center">
          <h1 className="text-[82px] font-bold text-white mb-4 font-playfair">
            Our events gallery
          </h1>
          <p className="text-[28px] text-white/90 max-w-2xl">
            Events at BITS are filled with joyous occasions, cultural
            gatherings, and learning opportunities that bring us all together.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-3">
          {filters.map(({ label, bgColor }) => {
            const isSelected = selectedFilter === label;
            return (
              <button
                key={label}
                onClick={() => setSelectedFilter(label)}
                className={`rounded-full border flex items-center gap-2 py-2 px-4 ${
                  isSelected
                    ? `bg-${bgColor}-600 text-white border-${bgColor}-600`
                    : `bg-gray-200 text-gray-600 border-gray-300 hover:bg-gray-300 hover:text-gray-800`
                }`}
              >
                <Search size={16} />
                {label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-20 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.data.map((event, index) => (
            <article
              key={index}
              onClick={() => {
                if (event) {
                  setSelectedEvent(event);
                  setCurrentImageIndex(index);
                }
              }}
              className="group cursor-pointer rounded-lg h-[430px] shadow-lg overflow-hidden bg-white"
            >
              {/* Image Section */}
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={headerImage}
                  alt={event?.Title || "Event image"}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-4">
                <h3 className="text-[24px] font-semibold font-playfair text-gray-900">
                  {event?.Title || "Untitled Event"}
                </h3>
                <time className="text-[14px] flex items-center mt-1">
                  <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                  {event?.Date || "Date not available"}
                </time>
                <p className="text-gray-600 mt-2">
                  {event?.Description || "No description available"}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-[90%] max-w-2xl">
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-black z-10"
            >
              <X size={24} />
            </button>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-1/2 left-0 right-0 z-10 flex justify-between px-4">
              <button
                onClick={handlePrevImage}
                className="text-white bg-black/50 p-2 rounded-full"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNextImage}
                className="text-white bg-black/50 p-2 rounded-full"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Image Display */}
            <img
              src={headerImage}
              alt={selectedEvent?.Title || "Event image"}
              className="w-full h-[400px] object-cover"
            />

            {/* Details Section */}
            <div className="p-4">
              <h3 className="text-[24px] font-bold">
                {events?.data?.[currentImageIndex]?.Title || "Untitled Event"}
              </h3>
              <time className="text-gray-600">
                {events?.data?.[currentImageIndex]?.Date || "No date available"}
              </time>
              <p className="text-gray-600 mt-2">
                {events?.data?.[currentImageIndex]?.Description ||
                  "No description available"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventGallery;
