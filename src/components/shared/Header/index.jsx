import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";

const getStoredUser = () => {
  try {
    const stored = localStorage.getItem("bookstore_user");
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

const getStoredCartCount = () => {
  try {
    const stored = localStorage.getItem("bookstore_cart");
    if (!stored) return 0;
    const items = JSON.parse(stored);
    return Array.isArray(items)
      ? items.reduce((acc, item) => acc + (item.qty || 1), 0)
      : 0;
  } catch {
    return 0;
  }
};

export default function Header() {
  const [currentUser, setCurrentUser] = useState(getStoredUser);
  const [cartCount, setCartCount] = useState(getStoredCartCount);

  useEffect(() => {
    const handleAuthChange = () => {
      setCurrentUser(getStoredUser());
    };

    const handleCartChange = () => {
      setCartCount(getStoredCartCount());
    };

    window.addEventListener("bookstore_auth_change", handleAuthChange);
    window.addEventListener("bookstore_cart_change", handleCartChange);
    window.addEventListener("storage", handleAuthChange);
    window.addEventListener("storage", handleCartChange);

    return () => {
      window.removeEventListener("bookstore_auth_change", handleAuthChange);
      window.removeEventListener("bookstore_cart_change", handleCartChange);
      window.removeEventListener("storage", handleAuthChange);
      window.removeEventListener("storage", handleCartChange);
    };
  }, []);

  const handleLogout = () => {
    if (window.confirm("Apakah Anda yakin ingin logout?")) {
      localStorage.removeItem("bookstore_user");
      setCurrentUser(null);
      window.dispatchEvent(new Event("bookstore_auth_change"));
    }
  };

  const styles = {
    active: {
      color: "#15803d",
      fontWeight: "700",
      backgroundColor: "#dcfce7",
      borderRadius: "20px",
    },
    normal: {
      color: "#475569",
      fontWeight: "500",
    },
  };

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link
          to="/"
          className="d-inline-flex align-items-center text-decoration-none"
        >
          <span
            className="d-inline-flex align-items-center justify-content-center bg-success-subtle rounded-circle p-2 me-2"
            style={{ width: "40px", height: "40px" }}
          >
            <i className="fa-solid fa-leaf text-success fs-5"></i>
          </span>
          <span className="fs-4 fw-bold" style={{ color: "#15803d", letterSpacing: "-0.5px" }}>
            Bookstore <small className="fs-6 fw-normal text-success">🌿</small>
          </span>
        </Link>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 gap-1">
        <li>
          <NavLink
            to="/"
            end
            className="nav-link px-3 py-2"
            style={({ isActive }) =>
              isActive ? styles.active : styles.normal
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/books"
            className="nav-link px-3 py-2"
            style={({ isActive }) =>
              isActive ? styles.active : styles.normal
            }
          >
            Books
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/team"
            className="nav-link px-3 py-2"
            style={({ isActive }) =>
              isActive ? styles.active : styles.normal
            }
          >
            Team
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className="nav-link px-3 py-2"
            style={({ isActive }) =>
              isActive ? styles.active : styles.normal
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Bagian User Login / Tombol Login Register & Keranjang */}
      <div className="col-md-5 text-end d-flex align-items-center justify-content-end gap-2 flex-wrap">
        <Link
          to="/books"
          className="btn btn-outline-success position-relative me-1 rounded-pill"
          title="Lihat Keranjang Belanja di Halaman Buku"
        >
          <i className="fa-solid fa-cart-shopping"></i>
          {cartCount > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartCount}
            </span>
          )}
        </Link>

        {currentUser ? (
          <div className="d-inline-flex align-items-center justify-content-end flex-wrap gap-2">
            <div className="d-flex align-items-center text-start bg-light px-2 py-1 rounded-pill border">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="rounded-circle me-2 border border-success"
                style={{ width: "32px", height: "32px", objectFit: "cover" }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80";
                }}
              />
              <div className="pe-2">
                <span className="text-muted d-block" style={{ fontSize: "10px" }}>
                  Selamat Datang,
                </span>
                <strong className="text-dark d-inline-block text-truncate" style={{ maxWidth: "120px", fontSize: "13px" }}>
                  {currentUser.name}
                </strong>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="btn btn-outline-danger btn-sm rounded-pill px-3"
              title="Keluar dari akun"
            >
              <i className="fa-solid fa-right-from-bracket me-1"></i>
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-success rounded-pill px-3 me-1">
              Login
            </Link>
            <Link to="/register" className="btn btn-success rounded-pill px-3">
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
}