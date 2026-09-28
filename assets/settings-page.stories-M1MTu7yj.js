import{n as e}from"./chunk-DnJy8xQt.js";import{Fn as t,en as n}from"./iframe-D8aQDl12.js";var r,i,a,o,s,c,l;e((()=>{n(),r={title:`Showcase/Settings Page`,parameters:{layout:`fullscreen`,docs:{description:{component:`A composed AIOSEO settings page using only registered components and SCSS tokens. No inline styles outside layout shells. Demonstrates that the system is real, the components compose cleanly, and a feature engineer could ship this end-to-end without leaving the docs.`}}}},i=[{label:`Default`,value:`default`},{label:`No Index`,value:`noindex`},{label:`Index`,value:`index`}],a=[{label:`English (US)`,value:`en-US`},{label:`English (UK)`,value:`en-GB`},{label:`French`,value:`fr-FR`},{label:`German`,value:`de-DE`},{label:`Spanish`,value:`es-ES`},{label:`Japanese`,value:`ja-JP`}],o={render:()=>({setup(){return{siteTitle:t(`Acme — WordPress SEO`),siteDescription:t(`Optimize meta titles, descriptions, and schema across your site automatically. Generated content ships with every post.`),defaultLang:t(`en-US`),indexPosts:t(!0),indexPages:t(!0),indexAttachments:t(!1),robots:t(`default`),robotsOptions:i,languageOptions:a,sitemapPages:t(!0),sitemapPosts:t(!0),sitemapMedia:t(!1),sitemapNews:t(!1),emailEnabled:t(!0),notifyOn:t([`errors`,`updates`]),showConfirm:t(!1),lastSavedAlert:t(!0)}},template:`
            <div style="background:#F3F4F5; min-height:100vh; padding:32px 40px;">
                <div style="max-width:1180px; margin:0 auto;">

                    <!-- Page header -->
                    <div style="margin-bottom:24px;">
                        <div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:11px; color:#8C8F9A; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:8px;">AIOSEO · Settings</div>
                        <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:24px;">
                            <div>
                                <h1 style="font-size:28px; font-weight:700; color:#141B38; letter-spacing:-0.5px; margin:0 0 6px;">Site settings</h1>
                                <p style="font-size:14px; color:#555D66; line-height:1.55; margin:0; max-width:640px;">Global SEO defaults that apply to every page on your site. Per-post overrides live in each post's editor sidebar.</p>
                            </div>
                            <core-pro-badge>PRO</core-pro-badge>
                        </div>
                    </div>

                    <!-- Top alert -->
                    <core-alert v-if="lastSavedAlert" type="green" :show-close="true" size="small" @close-alert="lastSavedAlert = false" style="margin-bottom:24px;">
                        <strong>Saved 2 minutes ago.</strong> Your changes have been applied to all 1,247 indexed URLs.
                    </core-alert>

                    <!-- Card: General -->
                    <core-card slug="general" header-text="General" :toggles="false" :no-slide="true">
                        <core-settings-row name="Site title" :required="true">
                            <template #description>Used as the default page title prefix across your site.</template>
                            <template #content>
                                <base-input v-model="siteTitle" size="medium" />
                            </template>
                        </core-settings-row>

                        <core-settings-row name="Site description">
                            <template #description>Default meta description for pages without one set.</template>
                            <template #content>
                                <base-textarea v-model="siteDescription" :min-height="80" />
                            </template>
                        </core-settings-row>

                        <core-settings-row name="Default language">
                            <template #description>Used for hreflang tags and content language hints.</template>
                            <template #content>
                                <base-select v-model="defaultLang" :options="languageOptions" :searchable="true" />
                            </template>
                        </core-settings-row>
                    </core-card>

                    <!-- Card: Indexing -->
                    <core-card slug="indexing" header-text="Indexing" :toggles="false" :no-slide="true">
                        <core-settings-row name="Index posts">
                            <template #description>Allow search engines to index blog posts.</template>
                            <template #content>
                                <base-toggle v-model="indexPosts">{{ indexPosts ? 'Indexed' : 'Not indexed' }}</base-toggle>
                            </template>
                        </core-settings-row>

                        <core-settings-row name="Index pages">
                            <template #description>Allow search engines to index static pages.</template>
                            <template #content>
                                <base-toggle v-model="indexPages">{{ indexPages ? 'Indexed' : 'Not indexed' }}</base-toggle>
                            </template>
                        </core-settings-row>

                        <core-settings-row name="Index media attachments">
                            <template #description>Most sites should leave this off — attachment URLs duplicate content.</template>
                            <template #content>
                                <base-toggle v-model="indexAttachments">{{ indexAttachments ? 'Indexed' : 'Not indexed' }}</base-toggle>
                            </template>
                        </core-settings-row>

                        <core-settings-row name="Default robots directive">
                            <template #description>
                                What to send for posts without a per-post override.
                                <core-tooltip>
                                    <svg-circle-question-mark style="width:14px; height:14px; margin-left:4px; vertical-align:middle; color:#8C8F9A;" />
                                    <template #tooltip>Robots meta tells crawlers whether to index a page and follow its links.</template>
                                </core-tooltip>
                            </template>
                            <template #content>
                                <base-radio-toggle name="robots" :options="robotsOptions" v-model="robots" />
                            </template>
                        </core-settings-row>
                    </core-card>

                    <!-- Card: Sitemap -->
                    <core-card slug="sitemap" header-text="XML Sitemap" :toggles="false" :no-slide="true">
                        <core-settings-row name="Include in sitemap">
                            <template #description>Pick the post types and media you want listed in xml sitemap output.</template>
                            <template #content>
                                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(160px, 1fr)); gap:8px;">
                                    <base-checkbox v-model="sitemapPages">Pages</base-checkbox>
                                    <base-checkbox v-model="sitemapPosts">Posts</base-checkbox>
                                    <base-checkbox v-model="sitemapMedia">Media</base-checkbox>
                                    <base-checkbox v-model="sitemapNews">News articles <core-pro-badge style="margin-left:6px;">PRO</core-pro-badge></base-checkbox>
                                </div>
                            </template>
                        </core-settings-row>
                    </core-card>

                    <!-- Card: Notifications -->
                    <core-card slug="notifications" header-text="Notifications" :toggles="false" :no-slide="true">
                        <core-settings-row name="Email notifications">
                            <template #description>Receive a daily digest at 9am with index changes, broken links, and crawl errors.</template>
                            <template #content>
                                <base-toggle v-model="emailEnabled">{{ emailEnabled ? 'On' : 'Off' }}</base-toggle>
                            </template>
                        </core-settings-row>
                    </core-card>

                    <!-- Footer action bar -->
                    <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:24px; padding-top:24px; border-top:1px solid #E8E8EB;">
                        <base-button type="gray">Cancel</base-button>
                        <base-button type="red" @click="showConfirm = true">Reset to defaults</base-button>
                        <base-button type="blue" size="medium">Save changes</base-button>
                    </div>

                    <!-- Reset confirmation modal -->
                    <core-modal :show="showConfirm" teleport-to="body" @close="showConfirm = false">
                        <template #headerTitle>
                            <h3 style="margin:0; font-size:18px; color:#141B38;">Reset to defaults?</h3>
                        </template>
                        <template #body>
                            <p style="margin:0 0 12px; color:#141B38;">All site-level SEO settings will revert to AIOSEO's recommended defaults.</p>
                            <p style="margin:0; color:#555D66; font-size:14px;">Per-post overrides aren't affected. This action cannot be undone.</p>
                        </template>
                        <template #footer>
                            <div style="display:flex; gap:8px; justify-content:flex-end;">
                                <base-button @click="showConfirm = false">Cancel</base-button>
                                <base-button type="red" @click="showConfirm = false">Reset settings</base-button>
                            </div>
                        </template>
                    </core-modal>

                </div>
            </div>
        `})},s={parameters:{docs:{description:{story:`A drawer-based UX for per-post SEO settings — what the editor sidebar looks like when a writer opens "AIOSEO" on a post.`}}},render:()=>({setup(){return{showDrawer:t(!1),focusKeyword:t(`on-page seo guide`),metaTitle:t(`The complete on-page SEO guide for 2026`),metaDescription:t(`Everything you need to know about on-page SEO — meta tags, schema markup, internal linking, and more.`),robots:t(`default`),robotsOptions:i}},template:`
            <div style="padding:60px 40px; background:#F3F4F5; min-height:100vh; font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
                <div style="max-width:680px; margin:0 auto; background:#fff; border:1px solid #E8E8EB; border-radius:8px; padding:48px 56px;">
                    <div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:11px; color:#8C8F9A; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:12px;">Demo · post editor</div>
                    <h1 style="font-size:32px; font-weight:700; letter-spacing:-0.5px; line-height:1.15; color:#141B38; margin:0 0 16px;">{{ metaTitle }}</h1>
                    <p style="font-size:16px; line-height:1.6; color:#3c434a; margin:0 0 24px;">{{ metaDescription }}</p>
                    <base-button type="blue" @click="showDrawer = true">
                        Open AIOSEO sidebar
                    </base-button>
                </div>

                <core-drawer :show="showDrawer" title="AIOSEO" :width="420" teleport-to="body" @close="showDrawer = false">
                    <div style="padding:8px 0;">
                        <div style="margin-bottom:24px;">
                            <div style="font-size:13px; font-weight:600; color:#141B38; margin-bottom:6px;">Focus keyphrase</div>
                            <base-input v-model="focusKeyword" size="medium" placeholder="What is this page about?" />
                            <div style="font-size:12px; color:#555D66; margin-top:6px;">The phrase you want this post to rank for.</div>
                        </div>

                        <div style="margin-bottom:24px;">
                            <div style="font-size:13px; font-weight:600; color:#141B38; margin-bottom:6px;">Meta title</div>
                            <base-input v-model="metaTitle" size="medium" />
                        </div>

                        <div style="margin-bottom:24px;">
                            <div style="font-size:13px; font-weight:600; color:#141B38; margin-bottom:6px;">Meta description</div>
                            <base-textarea v-model="metaDescription" :min-height="80" />
                        </div>

                        <div style="margin-bottom:24px;">
                            <div style="font-size:13px; font-weight:600; color:#141B38; margin-bottom:6px;">Robots directive</div>
                            <base-radio-toggle name="post-robots" :options="robotsOptions" v-model="robots" />
                        </div>

                        <core-alert type="blue" size="small">
                            <strong>Score: 84 / 100.</strong> Add an internal link to improve ranking signal.
                        </core-alert>
                    </div>

                    <template #footer>
                        <div style="display:flex; gap:8px; justify-content:flex-end;">
                            <base-button @click="showDrawer = false">Close</base-button>
                            <base-button type="blue" @click="showDrawer = false">Apply</base-button>
                        </div>
                    </template>
                </core-drawer>
            </div>
        `})},c={parameters:{docs:{description:{story:`A grid of feature cards. Demonstrates how core-card composes into a Feature Manager-style layout.`}}},render:()=>({setup(){return{features:[{slug:`image-seo`,name:`Image SEO`,desc:`Auto-generate alt text, image titles, and captions.`,status:`active`,tier:`pro`},{slug:`local`,name:`Local Business SEO`,desc:`Schema markup for local businesses and store hours.`,status:`inactive`,tier:`pro`},{slug:`redirects`,name:`Redirection Manager`,desc:`301/302/307 redirects with monitoring and 404 detection.`,status:`active`,tier:`pro`},{slug:`video`,name:`Video SEO`,desc:`Video sitemaps, schema, and embed metadata.`,status:`available`,tier:`pro`},{slug:`news`,name:`Google News`,desc:`News-specific sitemaps for AMP and standard pages.`,status:`available`,tier:`pro`},{slug:`index-status`,name:`Index Status`,desc:`Track which URLs Google has actually indexed.`,status:`available`,tier:`free`}]}},template:`
            <div style="background:#F3F4F5; min-height:100vh; padding:40px;">
                <div style="max-width:1180px; margin:0 auto;">
                    <div style="margin-bottom:24px;">
                        <div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:11px; color:#8C8F9A; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:8px;">AIOSEO · Feature Manager</div>
                        <h1 style="font-size:28px; font-weight:700; color:#141B38; letter-spacing:-0.5px; margin:0;">Features</h1>
                    </div>

                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:20px;">
                        <div v-for="f in features" :key="f.slug" style="background:#fff; border:1px solid #E8E8EB; border-radius:8px; box-shadow:0 2px 5px rgba(0,0,0,0.05); overflow:hidden;">
                            <div style="padding:20px; font-family:-apple-system,sans-serif;">
                                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:12px;">
                                    <div style="font-size:16px; font-weight:600; color:#141B38;">{{ f.name }}</div>
                                    <core-pro-badge v-if="f.tier === 'pro'">PRO</core-pro-badge>
                                </div>
                                <p style="font-size:13px; color:#555D66; line-height:1.55; margin:0 0 14px;">{{ f.desc }}</p>
                            </div>
                            <div style="padding:14px 20px; border-top:1px solid #E8E8EB; background:#F9F9FA; display:flex; align-items:center; justify-content:space-between; font-family:-apple-system,sans-serif;">
                                <div style="font-size:13px; color:#555D66;">
                                    <span v-if="f.status === 'active'" style="color:#15955F; font-weight:600;">Active</span>
                                    <span v-else-if="f.status === 'inactive'" style="color:#555D66;">Inactive</span>
                                    <span v-else style="color:#005AE0; font-weight:600;">Available</span>
                                </div>
                                <base-button v-if="f.status === 'active'"     size="small" type="gray">Manage</base-button>
                                <base-button v-else-if="f.status === 'inactive'" size="small" type="blue">Activate</base-button>
                                <base-button v-else                            size="small" type="green">Get this</base-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      const siteTitle = ref('Acme — WordPress SEO');
      const siteDescription = ref('Optimize meta titles, descriptions, and schema across your site automatically. Generated content ships with every post.');
      const defaultLang = ref('en-US');
      const indexPosts = ref(true);
      const indexPages = ref(true);
      const indexAttachments = ref(false);
      const robots = ref('default');
      const sitemapPages = ref(true);
      const sitemapPosts = ref(true);
      const sitemapMedia = ref(false);
      const sitemapNews = ref(false);
      const emailEnabled = ref(true);
      const notifyOn = ref(['errors', 'updates']);
      const showConfirm = ref(false);
      const lastSavedAlert = ref(true);
      return {
        siteTitle,
        siteDescription,
        defaultLang,
        indexPosts,
        indexPages,
        indexAttachments,
        robots,
        robotsOptions,
        languageOptions,
        sitemapPages,
        sitemapPosts,
        sitemapMedia,
        sitemapNews,
        emailEnabled,
        notifyOn,
        showConfirm,
        lastSavedAlert
      };
    },
    template: \`
            <div style="background:#F3F4F5; min-height:100vh; padding:32px 40px;">
                <div style="max-width:1180px; margin:0 auto;">

                    <!-- Page header -->
                    <div style="margin-bottom:24px;">
                        <div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:11px; color:#8C8F9A; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:8px;">AIOSEO · Settings</div>
                        <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:24px;">
                            <div>
                                <h1 style="font-size:28px; font-weight:700; color:#141B38; letter-spacing:-0.5px; margin:0 0 6px;">Site settings</h1>
                                <p style="font-size:14px; color:#555D66; line-height:1.55; margin:0; max-width:640px;">Global SEO defaults that apply to every page on your site. Per-post overrides live in each post's editor sidebar.</p>
                            </div>
                            <core-pro-badge>PRO</core-pro-badge>
                        </div>
                    </div>

                    <!-- Top alert -->
                    <core-alert v-if="lastSavedAlert" type="green" :show-close="true" size="small" @close-alert="lastSavedAlert = false" style="margin-bottom:24px;">
                        <strong>Saved 2 minutes ago.</strong> Your changes have been applied to all 1,247 indexed URLs.
                    </core-alert>

                    <!-- Card: General -->
                    <core-card slug="general" header-text="General" :toggles="false" :no-slide="true">
                        <core-settings-row name="Site title" :required="true">
                            <template #description>Used as the default page title prefix across your site.</template>
                            <template #content>
                                <base-input v-model="siteTitle" size="medium" />
                            </template>
                        </core-settings-row>

                        <core-settings-row name="Site description">
                            <template #description>Default meta description for pages without one set.</template>
                            <template #content>
                                <base-textarea v-model="siteDescription" :min-height="80" />
                            </template>
                        </core-settings-row>

                        <core-settings-row name="Default language">
                            <template #description>Used for hreflang tags and content language hints.</template>
                            <template #content>
                                <base-select v-model="defaultLang" :options="languageOptions" :searchable="true" />
                            </template>
                        </core-settings-row>
                    </core-card>

                    <!-- Card: Indexing -->
                    <core-card slug="indexing" header-text="Indexing" :toggles="false" :no-slide="true">
                        <core-settings-row name="Index posts">
                            <template #description>Allow search engines to index blog posts.</template>
                            <template #content>
                                <base-toggle v-model="indexPosts">{{ indexPosts ? 'Indexed' : 'Not indexed' }}</base-toggle>
                            </template>
                        </core-settings-row>

                        <core-settings-row name="Index pages">
                            <template #description>Allow search engines to index static pages.</template>
                            <template #content>
                                <base-toggle v-model="indexPages">{{ indexPages ? 'Indexed' : 'Not indexed' }}</base-toggle>
                            </template>
                        </core-settings-row>

                        <core-settings-row name="Index media attachments">
                            <template #description>Most sites should leave this off — attachment URLs duplicate content.</template>
                            <template #content>
                                <base-toggle v-model="indexAttachments">{{ indexAttachments ? 'Indexed' : 'Not indexed' }}</base-toggle>
                            </template>
                        </core-settings-row>

                        <core-settings-row name="Default robots directive">
                            <template #description>
                                What to send for posts without a per-post override.
                                <core-tooltip>
                                    <svg-circle-question-mark style="width:14px; height:14px; margin-left:4px; vertical-align:middle; color:#8C8F9A;" />
                                    <template #tooltip>Robots meta tells crawlers whether to index a page and follow its links.</template>
                                </core-tooltip>
                            </template>
                            <template #content>
                                <base-radio-toggle name="robots" :options="robotsOptions" v-model="robots" />
                            </template>
                        </core-settings-row>
                    </core-card>

                    <!-- Card: Sitemap -->
                    <core-card slug="sitemap" header-text="XML Sitemap" :toggles="false" :no-slide="true">
                        <core-settings-row name="Include in sitemap">
                            <template #description>Pick the post types and media you want listed in xml sitemap output.</template>
                            <template #content>
                                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(160px, 1fr)); gap:8px;">
                                    <base-checkbox v-model="sitemapPages">Pages</base-checkbox>
                                    <base-checkbox v-model="sitemapPosts">Posts</base-checkbox>
                                    <base-checkbox v-model="sitemapMedia">Media</base-checkbox>
                                    <base-checkbox v-model="sitemapNews">News articles <core-pro-badge style="margin-left:6px;">PRO</core-pro-badge></base-checkbox>
                                </div>
                            </template>
                        </core-settings-row>
                    </core-card>

                    <!-- Card: Notifications -->
                    <core-card slug="notifications" header-text="Notifications" :toggles="false" :no-slide="true">
                        <core-settings-row name="Email notifications">
                            <template #description>Receive a daily digest at 9am with index changes, broken links, and crawl errors.</template>
                            <template #content>
                                <base-toggle v-model="emailEnabled">{{ emailEnabled ? 'On' : 'Off' }}</base-toggle>
                            </template>
                        </core-settings-row>
                    </core-card>

                    <!-- Footer action bar -->
                    <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:24px; padding-top:24px; border-top:1px solid #E8E8EB;">
                        <base-button type="gray">Cancel</base-button>
                        <base-button type="red" @click="showConfirm = true">Reset to defaults</base-button>
                        <base-button type="blue" size="medium">Save changes</base-button>
                    </div>

                    <!-- Reset confirmation modal -->
                    <core-modal :show="showConfirm" teleport-to="body" @close="showConfirm = false">
                        <template #headerTitle>
                            <h3 style="margin:0; font-size:18px; color:#141B38;">Reset to defaults?</h3>
                        </template>
                        <template #body>
                            <p style="margin:0 0 12px; color:#141B38;">All site-level SEO settings will revert to AIOSEO's recommended defaults.</p>
                            <p style="margin:0; color:#555D66; font-size:14px;">Per-post overrides aren't affected. This action cannot be undone.</p>
                        </template>
                        <template #footer>
                            <div style="display:flex; gap:8px; justify-content:flex-end;">
                                <base-button @click="showConfirm = false">Cancel</base-button>
                                <base-button type="red" @click="showConfirm = false">Reset settings</base-button>
                            </div>
                        </template>
                    </core-modal>

                </div>
            </div>
        \`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A drawer-based UX for per-post SEO settings — what the editor sidebar looks like when a writer opens "AIOSEO" on a post.'
      }
    }
  },
  render: () => ({
    setup() {
      const showDrawer = ref(false);
      const focusKeyword = ref('on-page seo guide');
      const metaTitle = ref('The complete on-page SEO guide for 2026');
      const metaDescription = ref('Everything you need to know about on-page SEO — meta tags, schema markup, internal linking, and more.');
      const robots = ref('default');
      return {
        showDrawer,
        focusKeyword,
        metaTitle,
        metaDescription,
        robots,
        robotsOptions
      };
    },
    template: \`
            <div style="padding:60px 40px; background:#F3F4F5; min-height:100vh; font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
                <div style="max-width:680px; margin:0 auto; background:#fff; border:1px solid #E8E8EB; border-radius:8px; padding:48px 56px;">
                    <div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:11px; color:#8C8F9A; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:12px;">Demo · post editor</div>
                    <h1 style="font-size:32px; font-weight:700; letter-spacing:-0.5px; line-height:1.15; color:#141B38; margin:0 0 16px;">{{ metaTitle }}</h1>
                    <p style="font-size:16px; line-height:1.6; color:#3c434a; margin:0 0 24px;">{{ metaDescription }}</p>
                    <base-button type="blue" @click="showDrawer = true">
                        Open AIOSEO sidebar
                    </base-button>
                </div>

                <core-drawer :show="showDrawer" title="AIOSEO" :width="420" teleport-to="body" @close="showDrawer = false">
                    <div style="padding:8px 0;">
                        <div style="margin-bottom:24px;">
                            <div style="font-size:13px; font-weight:600; color:#141B38; margin-bottom:6px;">Focus keyphrase</div>
                            <base-input v-model="focusKeyword" size="medium" placeholder="What is this page about?" />
                            <div style="font-size:12px; color:#555D66; margin-top:6px;">The phrase you want this post to rank for.</div>
                        </div>

                        <div style="margin-bottom:24px;">
                            <div style="font-size:13px; font-weight:600; color:#141B38; margin-bottom:6px;">Meta title</div>
                            <base-input v-model="metaTitle" size="medium" />
                        </div>

                        <div style="margin-bottom:24px;">
                            <div style="font-size:13px; font-weight:600; color:#141B38; margin-bottom:6px;">Meta description</div>
                            <base-textarea v-model="metaDescription" :min-height="80" />
                        </div>

                        <div style="margin-bottom:24px;">
                            <div style="font-size:13px; font-weight:600; color:#141B38; margin-bottom:6px;">Robots directive</div>
                            <base-radio-toggle name="post-robots" :options="robotsOptions" v-model="robots" />
                        </div>

                        <core-alert type="blue" size="small">
                            <strong>Score: 84 / 100.</strong> Add an internal link to improve ranking signal.
                        </core-alert>
                    </div>

                    <template #footer>
                        <div style="display:flex; gap:8px; justify-content:flex-end;">
                            <base-button @click="showDrawer = false">Close</base-button>
                            <base-button type="blue" @click="showDrawer = false">Apply</base-button>
                        </div>
                    </template>
                </core-drawer>
            </div>
        \`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A grid of feature cards. Demonstrates how core-card composes into a Feature Manager-style layout.'
      }
    }
  },
  render: () => ({
    setup() {
      const features = [{
        slug: 'image-seo',
        name: 'Image SEO',
        desc: 'Auto-generate alt text, image titles, and captions.',
        status: 'active',
        tier: 'pro'
      }, {
        slug: 'local',
        name: 'Local Business SEO',
        desc: 'Schema markup for local businesses and store hours.',
        status: 'inactive',
        tier: 'pro'
      }, {
        slug: 'redirects',
        name: 'Redirection Manager',
        desc: '301/302/307 redirects with monitoring and 404 detection.',
        status: 'active',
        tier: 'pro'
      }, {
        slug: 'video',
        name: 'Video SEO',
        desc: 'Video sitemaps, schema, and embed metadata.',
        status: 'available',
        tier: 'pro'
      }, {
        slug: 'news',
        name: 'Google News',
        desc: 'News-specific sitemaps for AMP and standard pages.',
        status: 'available',
        tier: 'pro'
      }, {
        slug: 'index-status',
        name: 'Index Status',
        desc: 'Track which URLs Google has actually indexed.',
        status: 'available',
        tier: 'free'
      }];
      return {
        features
      };
    },
    template: \`
            <div style="background:#F3F4F5; min-height:100vh; padding:40px;">
                <div style="max-width:1180px; margin:0 auto;">
                    <div style="margin-bottom:24px;">
                        <div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:11px; color:#8C8F9A; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:8px;">AIOSEO · Feature Manager</div>
                        <h1 style="font-size:28px; font-weight:700; color:#141B38; letter-spacing:-0.5px; margin:0;">Features</h1>
                    </div>

                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:20px;">
                        <div v-for="f in features" :key="f.slug" style="background:#fff; border:1px solid #E8E8EB; border-radius:8px; box-shadow:0 2px 5px rgba(0,0,0,0.05); overflow:hidden;">
                            <div style="padding:20px; font-family:-apple-system,sans-serif;">
                                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:12px;">
                                    <div style="font-size:16px; font-weight:600; color:#141B38;">{{ f.name }}</div>
                                    <core-pro-badge v-if="f.tier === 'pro'">PRO</core-pro-badge>
                                </div>
                                <p style="font-size:13px; color:#555D66; line-height:1.55; margin:0 0 14px;">{{ f.desc }}</p>
                            </div>
                            <div style="padding:14px 20px; border-top:1px solid #E8E8EB; background:#F9F9FA; display:flex; align-items:center; justify-content:space-between; font-family:-apple-system,sans-serif;">
                                <div style="font-size:13px; color:#555D66;">
                                    <span v-if="f.status === 'active'" style="color:#15955F; font-weight:600;">Active</span>
                                    <span v-else-if="f.status === 'inactive'" style="color:#555D66;">Inactive</span>
                                    <span v-else style="color:#005AE0; font-weight:600;">Available</span>
                                </div>
                                <base-button v-if="f.status === 'active'"     size="small" type="gray">Manage</base-button>
                                <base-button v-else-if="f.status === 'inactive'" size="small" type="blue">Activate</base-button>
                                <base-button v-else                            size="small" type="green">Get this</base-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        \`
  })
}`,...c.parameters?.docs?.source}}},l=[`SiteSettings`,`PostEditorSidebar`,`FeatureManager`]}))();export{c as FeatureManager,s as PostEditorSidebar,o as SiteSettings,l as __namedExportsOrder,r as default};