import AboutUs from "@/components/home/about-us/about-us";

export const metadata = {
    title: "About Us - VPASS",
    description:
        "Learn more about VPASS and our mission to create unforgettable travel experiences.",
};

export default function AboutPage() {
    return (
        <main className="flex flex-col min-h-[calc(100vh-64px)] -mt-9">
            <AboutUs />
        </main>
    );
}
