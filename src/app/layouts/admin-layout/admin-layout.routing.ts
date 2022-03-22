import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { MapComponent } from "../../pages/map/map.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import {AdminLayoutComponent} from "./admin-layout.component";


export const AdminLayoutRoutes: Routes = [
  { path: "", component: AdminLayoutComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "maps", component: MapComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
 //  { path: "rtl", component: RtlComponent }
];
