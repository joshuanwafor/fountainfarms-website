import React from "react"
import Link from "next/link"

export default function Footer() {
    return <div className="pt-5">

        <div class="bg-dark text-muted py-3">
            <div class="container py-5">
                <footer class="row">
                    <div className="col-md-4">
                        <h1>FountainFarms</h1>
                        <div>
                            Fountainfarms lets you get high returns when you sponsor farms, farms sponsored help farmers scale up production, empower the communities, preserve the future.
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="fw-bold">The Company</div>
                    </div>
                    <div className="col-md-2">
                        <div className="fw-bold">Explore</div>
                    </div>
                    <div className="col-md-2">
                        <div className="fw-bold">Socials</div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
}