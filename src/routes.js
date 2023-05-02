import
{
    ADMIN_ROUTE,
    MAIN_ROUTE,
    ABOUT_ROUTE,
    DOCUMENTS_ROUTE,
    TECHNOLOGIES_ROUTE,
    REVIEWS_ROUTE,
    NEWS_ROUTE,
    SERVICES_ROUTE,
    CONTACTS_ROUTE,
    PRIVACY_ROUTE,
    PRICES_ROUTE,
    CALCULATION_ROUTE,
    AUTH_ROUTE,
    ERROR_ROUTE,
} from "./utils/const";

import Main from "./pages/Main";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Documents from "./pages/Documents";
import Technologies from "./pages/Technologies";
import Reviews from "./pages/Reviews";
import News from "./pages/News";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Prices from "./pages/Prices";
import CostCalculation from "./pages/CostCalculation";
import OneTechnologies from "./pages/OneTechnologies";
import OneNews from "./pages/OneNews";
import OneServices from "./pages/OneServices";
import Auth from "./pages/Auth";
import Error from "./pages/Error";



export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]


export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: DOCUMENTS_ROUTE,
        Component: Documents
    },
    {
        path: TECHNOLOGIES_ROUTE,
        Component: Technologies
    },
    {
        path: TECHNOLOGIES_ROUTE + '/:title/:id',
        Component: OneTechnologies
    },
    {
        path: REVIEWS_ROUTE,
        Component: Reviews
    },
    {
        path: NEWS_ROUTE,
        Component: News
    },
    {
        path: NEWS_ROUTE + '/:title/:id',
        Component: OneNews
    },
    {
        path: SERVICES_ROUTE,
        Component: Services
    },
    {
        path: SERVICES_ROUTE + '/:title/:id',
        Component: OneServices
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },

    {
        path: PRIVACY_ROUTE,
        Component: PrivacyPolicy
    },
    {
        path: PRICES_ROUTE,
        Component: Prices
    },
    {
        path: CALCULATION_ROUTE,
        Component: CostCalculation
    },
    {
        path: ERROR_ROUTE,
        Component: Error
    }
]
