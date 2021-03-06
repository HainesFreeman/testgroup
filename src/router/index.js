import Vue from 'vue'
import Router from 'vue-router'
import Care from '@/pages/care/care'
import Share from '@/pages/share/share'
import AuditList from '@/pages/audit/audit_list'
import AuditDetail from '@/pages/audit/audit_detail'
import MovHot from '@/pages/share/component/mov_hot';
import MovNew from '@/pages/share/component/mov_new';

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'AuditList',
      component: AuditList
    },
    {
      path: '/auditdetail',
      name: 'AuditDetail',
      component: AuditDetail
    },
    {
      path: '/care',
      name: 'Care',
      component: Care
    },
    {
      path: '/share',
      name: 'Share',
      component: Share,
      children:[
        {
          path: '/',
          name: '/hot',
          component: MovHot
        },
        {
          path: '/hot',
          name: 'MovHot',
          component: MovHot
        },
        {
          path: '/new',
          name: 'MovNew',
          component: MovNew
        }
      ]
    }
  ]
})
