"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./LumaEvents.module.css";
import Navbar from "./components/Navbar";
import Toast from "./components/Toast";

interface Event {
	id: string;
	title: string;
	date: string;
	time: string;
	location: string;
	attendees: number;
	image?: string;
	category: string;
}

const mockEvents: Event[] = [
	{
		id: "1",
		title: "AI & Machine Learning Summit 2025",
		date: "Oct 15, 2025",
		time: "2:00 PM PST",
		location: "San Francisco, CA",
		attendees: 234,
		category: "Conference",
		image:
			"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
	},
	{
		id: "2",
		title: "Web3 Developer Workshop",
		date: "Oct 18, 2025",
		time: "6:00 PM PST",
		location: "Virtual",
		attendees: 156,
		category: "Workshop",
		image:
			"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
	},
	{
		id: "3",
		title: "Startup Pitch Night",
		date: "Oct 20, 2025",
		time: "7:00 PM PST",
		location: "Palo Alto, CA",
		attendees: 89,
		category: "Networking",
		image:
			"https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
	},
	{
		id: "4",
		title: "Design Systems Masterclass",
		date: "Oct 22, 2025",
		time: "10:00 AM PST",
		location: "San Francisco, CA",
		attendees: 178,
		category: "Workshop",
		image:
			"https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
	},
	{
		id: "5",
		title: "Cloud Architecture Forum",
		date: "Oct 25, 2025",
		time: "3:00 PM PST",
		location: "Seattle, WA",
		attendees: 312,
		category: "Conference",
		image:
			"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
	},
	{
		id: "6",
		title: "Product Management Meetup",
		date: "Oct 27, 2025",
		time: "6:30 PM PST",
		location: "San Francisco, CA",
		attendees: 145,
		category: "Networking",
		image:
			"https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
	},
	{
		id: "7",
		title: "Cybersecurity Best Practices",
		date: "Oct 29, 2025",
		time: "1:00 PM PST",
		location: "Virtual",
		attendees: 267,
		category: "Workshop",
		image:
			"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
	},
	{
		id: "8",
		title: "Tech Founders Dinner",
		date: "Nov 1, 2025",
		time: "7:00 PM PST",
		location: "San Francisco, CA",
		attendees: 42,
		category: "Networking",
		image:
			"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
	},
];

export default function Home() {
	const [selectedFilter, setSelectedFilter] = useState<string>("All");
	const [searchQuery, setSearchQuery] = useState("");
	const [showToast, setShowToast] = useState(false);

	const filters = ["All", "Conference", "Workshop", "Networking"];

	const handleInteraction = () => {
		setShowToast(true);
	};

	const filteredEvents = mockEvents.filter((event) => {
		const matchesFilter =
			selectedFilter === "All" || event.category === selectedFilter;
		const matchesSearch =
			event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			event.location.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesFilter && matchesSearch;
	});

	return (
		<>
			<Navbar onInteraction={handleInteraction} />
			<div className={styles.container}>
				<div className={styles.gradientBg} />

				<div className={styles.content}>
					{/* Header */}
					<header className={styles.header}>
						<div className={styles.headerContent}>
							<div className={styles.titleSection}>
								<h1 className={styles.title}>Tech Events</h1>
								<p className={styles.subtitle}>
									Discover and attend the best tech events in your area
								</p>
								<div className={styles.stats}>
									<span className={styles.stat}>1.2K subscribers</span>
									<span className={styles.statDivider}>·</span>
									<span className={styles.stat}>347 events</span>
								</div>
							</div>
						</div>
					</header>

					{/* Search and Filters */}
					<div className={styles.controls}>
						<div className={styles.searchWrapper}>
							<svg
								className={styles.searchIcon}
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
							>
								<circle
									cx="7"
									cy="7"
									r="5"
									stroke="currentColor"
									strokeWidth="1.5"
								/>
								<path
									d="M11 11L14 14"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
							</svg>
							<input
								type="text"
								placeholder="Search events..."
								className={styles.searchInput}
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
						</div>

						<div className={styles.filters}>
							{filters.map((filter) => (
								<button
									key={filter}
									className={`${styles.filterBtn} ${
										selectedFilter === filter ? styles.filterBtnActive : ""
									}`}
									onClick={() => setSelectedFilter(filter)}
								>
									{filter}
								</button>
							))}
						</div>
					</div>

					{/* Events Grid */}
					<div className={styles.eventsGrid}>
						{filteredEvents.map((event, index) => (
							<div
								key={event.id}
								className={styles.eventCard}
								style={{ "--delay": `${index * 0.05}s` } as React.CSSProperties}
							>
								<div className={styles.eventCardInner}>
									{event.image && (
										<div className={styles.eventImage}>
											<Image
												src={event.image}
												alt={event.title}
												fill
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
												style={{ objectFit: "cover" }}
											/>
											<div className={styles.eventImageOverlay} />
										</div>
									)}

									<div className={styles.eventContent}>
										<div className={styles.eventHeader}>
											<span className={styles.eventCategory}>
												{event.category}
											</span>
											<span className={styles.eventAttendees}>
												<svg
													width="12"
													height="12"
													viewBox="0 0 12 12"
													fill="none"
												>
													<path
														d="M6 6C7.38071 6 8.5 4.88071 8.5 3.5C8.5 2.11929 7.38071 1 6 1C4.61929 1 3.5 2.11929 3.5 3.5C3.5 4.88071 4.61929 6 6 6Z"
														stroke="currentColor"
														strokeWidth="1.2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
													<path
														d="M10.5 11C10.5 9.067 8.433 7.5 6 7.5C3.567 7.5 1.5 9.067 1.5 11"
														stroke="currentColor"
														strokeWidth="1.2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
												{event.attendees}
											</span>
										</div>

										<h3 className={styles.eventTitle}>{event.title}</h3>

										<div className={styles.eventDetails}>
											<div className={styles.eventDetail}>
												<svg
													width="14"
													height="14"
													viewBox="0 0 14 14"
													fill="none"
												>
													<rect
														x="2"
														y="3"
														width="10"
														height="9"
														rx="1"
														stroke="currentColor"
														strokeWidth="1.2"
													/>
													<path
														d="M2 6H12"
														stroke="currentColor"
														strokeWidth="1.2"
													/>
													<path
														d="M5 2V4"
														stroke="currentColor"
														strokeWidth="1.2"
														strokeLinecap="round"
													/>
													<path
														d="M9 2V4"
														stroke="currentColor"
														strokeWidth="1.2"
														strokeLinecap="round"
													/>
												</svg>
												<span>{event.date}</span>
											</div>

											<div className={styles.eventDetail}>
												<svg
													width="14"
													height="14"
													viewBox="0 0 14 14"
													fill="none"
												>
													<circle
														cx="7"
														cy="7"
														r="5"
														stroke="currentColor"
														strokeWidth="1.2"
													/>
													<path
														d="M7 4V7L9 9"
														stroke="currentColor"
														strokeWidth="1.2"
														strokeLinecap="round"
													/>
												</svg>
												<span>{event.time}</span>
											</div>

											<div className={styles.eventDetail}>
												<svg
													width="14"
													height="14"
													viewBox="0 0 14 14"
													fill="none"
												>
													<path
														d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z"
														stroke="currentColor"
														strokeWidth="1.2"
													/>
													<path
														d="M7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z"
														stroke="currentColor"
														strokeWidth="1.2"
													/>
												</svg>
												<span>{event.location}</span>
											</div>
										</div>

										<button
											className={styles.rsvpBtn}
											onClick={handleInteraction}
										>
											<span>RSVP</span>
											<svg
												width="12"
												height="12"
												viewBox="0 0 12 12"
												fill="none"
											>
												<path
													d="M2 6H10M10 6L6 2M10 6L6 10"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
						))}
					</div>

					{filteredEvents.length === 0 && (
						<div className={styles.emptyState}>
							<p>No events found matching your criteria</p>
						</div>
					)}
				</div>
			</div>

			{showToast && (
				<Toast
					message="Sorry, this demo isn't hooked up to anything! 
          If you would like to change that, shoot me an email at 
          ost.sam@gmail.com :)"
					onClose={() => setShowToast(false)}
				/>
			)}
		</>
	);
}
