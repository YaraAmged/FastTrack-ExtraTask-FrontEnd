import { ThemeProvider, createTheme } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import "./App.css";
import BranchesSection from "./components/BranchesSection/BranchesSection";
import ClientsOpinions from "./components/ClientsOpinions/ClientsOpinions";
import Footer from "./components/Footer/Footer";
import FreeQuotaForm from "./components/FreeQuotaForm/FreeQuotaForm";
import LandingSection from "./components/LandingSection/LandingSection";
import Services from "./components/Services/Services.jsx";
import ServicesDescription from "./components/ServicesDescription/ServicesDescription";
import TeamSection from "./components/TeamSection/TeamSection";
import VideoSection from "./components/VideoSection/VideoSection";
const theme = createTheme({
  typography: { fontFamily: "Montserrat" },
  components: {
    MuiContainer: {
      defaultProps: { sx: { paddingLeft: "42px", paddingRight: "42px" } },
    },
  },
});
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LandingSection />
        <Services />
        <ServicesDescription />
        <VideoSection />
        <ClientsOpinions />
        <TeamSection />
        <BranchesSection />
        <FreeQuotaForm />
        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
