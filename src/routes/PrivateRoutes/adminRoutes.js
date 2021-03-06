import React from "react"
//
import ErrorBoundary from "base_components/ErrorBoundary"
/* for code splitting - loadable */
import Loadable from "react-loadable"
import Loader from "base_components/Loader"

// ------------------------- ADMIN PANEL COMPONENT -------------------------------//
const AsyncAdminGroupManager = Loadable({
  loader: () => import("scenes/Admin/AdminGroupManager"),
  loading: Loader,
  timeout: 10000
})

const AsyncAdminUserManager = Loadable({
  loader: () => import("scenes/Admin/AdminUserManager"),
  loading: Loader,
  timeout: 10000
})

const AsyncAdminCourseCreator = Loadable({
  loader: () => import("scenes/Admin/AdminCourseCreator"),
  loading: Loader,
  timeout: 10000
})

const AsyncAdminOrganisationSettings = Loadable({
  loader: () => import("scenes/Admin/AdminOrganisationSettings"),
  loading: Loader,
  timeout: 10000
})

const adminRoutes = [
  {
    path: "/secure/admin/group-manager",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the admin group manager page.">
        <AsyncAdminGroupManager {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/admin/user-manager",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the admin user manager page.">
        <AsyncAdminUserManager {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/admin/course-creator",
    strict: true,
    exact: false,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the admin user manager page.">
        <AsyncAdminCourseCreator {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/admin/organisation-settings",
    strict: true,
    exact: false,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the admin user manager page.">
        <AsyncAdminOrganisationSettings {...props} />
      </ErrorBoundary>
    )
  }
]

export default adminRoutes
