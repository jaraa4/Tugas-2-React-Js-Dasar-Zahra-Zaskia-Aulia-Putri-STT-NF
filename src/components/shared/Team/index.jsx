import mi from "../../../assets/mi.jpg";

export default function Team() {
  const teamMembers = [
    {
      name: "Muhammad Hikmal Akbar",
      role: "SDM Of Bookstore",
      image:
        "src/assets/hikmal.jpg",
      fallback:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Zahra Zaskia Aulia Putri",
      role: "Owner Of BookStore",
      image: mi,
      fallback:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Yolla Azzahra Syabilla",
      role: "CEO Of BookStore",
      image:
        "src/assets/yowa.jpg",
      fallback:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <>
      <section className="py-5" id="tim">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Tim Bookstore</h2>
          <p className="text-muted mb-4 mx-auto" style={{ maxWidth: "600px" }}>
            Tim kami yang berdedikasi untuk membantu menemukan buku terbaik untukmu.
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {teamMembers.map((member, index) => (
              <div className="col" key={index}>
                <div className="card h-100 shadow-sm border-0 rounded-3 text-center p-3">
                  <img
                    src={member.image}
                    className="card-img-top img-fluid rounded-circle mx-auto mt-3 shadow-sm"
                    alt={member.name}
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = member.fallback;
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold mb-1">{member.name}</h5>
                    <p className="text-muted small mb-3">{member.role}</p>
                    <div className="d-flex justify-content-center gap-2">
                      <a
                        href="#kontak"
                        className="btn btn-sm btn-outline-primary rounded-circle"
                        title={`Hubungi ${member.name}`}
                        style={{ width: "36px", height: "36px", lineHeight: "24px" }}
                      >
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary rounded-circle"
                        title={`LinkedIn ${member.name}`}
                        style={{ width: "36px", height: "36px", lineHeight: "24px" }}
                        onClick={() =>
                          alert(`Membuka profil LinkedIn ${member.name}`)
                        }
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-dark rounded-circle"
                        title={`GitHub ${member.name}`}
                        style={{ width: "36px", height: "36px", lineHeight: "24px" }}
                        onClick={() =>
                          alert(`Membuka profil GitHub ${member.name}`)
                        }
                      >
                        <i className="fa-brands fa-github"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}