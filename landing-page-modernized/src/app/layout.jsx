
import "./globals.css";




export const metadata = {
  title: "TMT Group",
  description: "Developed By Green Devs",
  icons: {
    icon: "./tmt.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
