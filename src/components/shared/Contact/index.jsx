import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setAlert({
        type: "danger",
        text: "Harap isi semua kolom formulir sebelum mengirim.",
      });
      return;
    }

    setAlert({
      type: "success",
      text: `Terima kasih, ${formData.name}! Pesan Anda telah kami terima dan tim kami akan segera menghubungi ${formData.email}.`,
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <section className="py-5" id="kontak">
        <div className="container">
          <h2 className="text-center fw-bold mb-3">Hubungi Kami</h2>
          <p className="text-center text-muted mb-4 mx-auto" style={{ maxWidth: "600px" }}>
            Kami senang mendengar dari Anda! Jika Anda memiliki pertanyaan, saran atau masalah,
            silakan menghubungi kami melalui formulir di bawah ini.
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="card shadow-sm border-0 rounded-3">
                <div className="card-body p-4 p-md-5">
                  {alert && (
                    <div
                      className={`alert alert-${alert.type} alert-dismissible fade show`}
                      role="alert"
                    >
                      <i
                        className={`fa-solid ${
                          alert.type === "success"
                            ? "fa-circle-check"
                            : "fa-triangle-exclamation"
                        } me-2`}
                      ></i>
                      {alert.text}
                      <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={() => setAlert(null)}
                      ></button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Nama Lengkap</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Tulis namamu..."
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Alamat Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Alamat emailmu..."
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Isi Pesan</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control"
                        rows="4"
                        placeholder="Tulis pesanmu..."
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary px-4 py-2 fw-bold"
                    >
                      <i className="fa-solid fa-paper-plane me-2"></i>
                      Kirim Pesan
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}