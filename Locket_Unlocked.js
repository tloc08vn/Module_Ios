// ============================================================
// Locket Remote Config Rewrite
// Endpoint: firebaseremoteconfig.googleapis.com
// Dùng cho: Loon / Quantumult X / Surge / Shadowrocket
// Tác giả: @TanLocNe
// ============================================================

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var obj = JSON.parse($response.body);

if (ua.includes("Locket")) {
    obj.Attention = "Chúc mừng bạn!trải nghiệm vui vẻ nhé!";
    obj.entries = obj.entries || {};

    // ============================================================
    // 1. CẤU HÌNH GOLD, FEATURE GATES & PAYWALL
    // ============================================================
    Object.assign(obj.entries, {
        feature_gates: JSON.stringify({
            app_icon_picker: "enabled",
            camera_roll: "enabled",
            camera_theme: "enabled",
            locket_views: "enabled",
            long_captions: "enabled",
            longer_video: "enabled",
            unlimited_friends: "enabled",
            priority_support: "enabled",
            profile_badge: "enabled",
            remove_ads: "enabled",
            video: "enabled",
            custom_widget_frames: "enabled",
            streak_recovery: "enabled"
        }),
        upsell_features: JSON.stringify({
            app_icon_picker: true,
            camera_roll: true,
            camera_theme: true,
            locket_views: true,
            remove_ads: true,
            custom_widget_frames: true
        }),
        paywall_presentation_config: JSON.stringify({
            uid: "paywall_testflight",
            onboarding: false,
            after_sent_moment: false,
            on_foreground: false,
            interval: 2592000,
            profile_banner: true
        }),
        feature_discovery_popup_config: JSON.stringify({
            tag: "LOCKET GOLD",
            tag_gradient: true,
            tag_style: "gold_gradient",
            title: "Lên LocketGold rồi đó 😎",
            feature_set: [
                {
                    title: "Cảm ơn đã sử dụng dịch vụ bên mình ✨",
                    body: " Tloc chúc các bạn sử dụng vui vẻ💛",
                    imageURL: "https://i.ibb.co/q6sNfq5/kawaii.gif"
                }
            ],
            primary_button_title: "Xong",
            campaign: "locket_gold_welcome_v3",
            start_at: "2020-01-01T00:00:00",
            end_at: "2099-12-31T23:59:59",
            use_local_time_zone: true
        }),
        android_subscribe_gold_button_enabled: "false",
        profile_badge_visible: "true",
        lunar_new_year_app_icon_enabled: "true",
        settings_faceboonk_url: "https://www.facebook.com/share/1G5zL1oZbV/?mibextid=wwXIfr",
        settings_tiktok_url: "https://www.tiktok.com/@nguyenloc0803?_r=1&_t=ZS-9AYwyXCVI4U"
    });

    // ============================================================
    // 2. CHẶN QUẢNG CÁO & TẮT TRACKING (SENTRY)
    // ============================================================
    Object.assign(obj.entries, {
        history_ads_mode: "off",
        history_ads_prefetch_count: "0",
        history_ads_prefetch_immediate: "false",
        history_ads_prefetch_reroute: "false",
        history_ads_dynamic_insertion: "false",
        history_ads_refresh_prefetch_on_foreground: "false",
        history_ads_floor_price: "0",
        history_ads_floor_price_att: "0",
        history_ad_log_displayed_on_background: "false",
        history_ads_debug_menu: "false",
        sentry_sample_rate: "0",
        sentry_network_tracing: "false",
        sentry_performance_tracking: "false",
        sentry_trace_sample_rate: "0",
        sentry_profiles_sample_rate: "0"
    });

    // ============================================================
    // 3. CAMERA, VIDEO, FILTERS & UPLOAD QUALITY
    // ============================================================
    Object.assign(obj.entries, {
        camera: JSON.stringify({
            gold_max_duration: 30.0,
            goldMaxDuration: 30.0,
            max_duration: 30.0,
            maxDuration: 30.0,
            ultra_wide: true,
            ultraWide: true,
            volume_button: true,
            volumeButton: true,
            flash_button: true,
            telephoto: true,
            srgb: true,
            lanczos: true,
            quality_mbps: 0.8,
            qualityMbps: 0.8
        }),
        camera_roll: JSON.stringify({
            gold_max_duration: 30.0,
            goldMaxDuration: 30.0,
            video_max_duration: 30.0,
            videoMaxDuration: 30.0,
            max_duration: 30.0,
            maxDuration: 30.0,
            trim_max_duration: 30.0,
            trimMaxDuration: 30.0,
            camera_roll_max_duration: 30.0,
            quality_mbps: 0.8,
            qualityMbps: 0.8,
            flash_button: true
        }),
        live_photos: JSON.stringify({
            capture: true,
            viewing: true,
            catch_up: true,
            widget_looping_mode: "never"
        }),
        camera_filter_config: JSON.stringify({
            allows_custom_filters: true,
            show_filter_button: true,
            sheet_enabled: true,
            open_sheet_immediately: true,
            sheet_filters: [
                { title: { en: "Goofy" }, filter_ids: ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows"] },
                { title: { en: "Looks" }, filter_ids: ["bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces", "bye_brows"] },
                { title: { en: "Celebrate" }, filter_ids: ["slimed", "princess", "disco_lights", "cash_money", "happy_birthday"] },
                { title: { en: "Cute" }, filter_ids: ["cutesy", "sticker_face", "flower_crown", "love_bug"] },
                { title: { en: "Costumes" }, filter_ids: ["wedding", "cowboy_cowgirl", "giraffe", "clown"] },
                { title: { en: "Holidays" }, filter_ids: ["easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun", "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"] }
            ],
            picker_filters: [
                "okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows",
                "bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns",
                "tatted", "mohawk", "braces", "slimed", "princess",
                "disco_lights", "cash_money", "happy_birthday", "cutesy", "sticker_face",
                "flower_crown", "love_bug", "wedding", "cowboy_cowgirl", "giraffe",
                "clown", "easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun",
                "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"
            ]
        }),
        camera_roll_preview_enabled: "true",
        camera_roll_video_enabled: "true",
        camera_roll_video_upload_enabled: "true",
        internal_camera_roll_video_upload_enabled: "true",
        longer_camera_roll_videos_enabled: "true",
        camera_roll_video_max_duration: "30.0",
        camera_roll_max_duration: "30.0",
        camera_roll_duration: "30.0",
        max_video_duration: "30.0",
        video_max_duration: "30.0",
        video_trim_max_duration: "30.0",
        trim_max_duration: "30.0",
        gold_max_duration: "30.0",
        goldMaxDuration: "30.0",
        video_quality_mbps: "0.8",
        video_sound_enabled: "true",
        microphone_enabled: "true",
        camera_microphone_enabled: "true",
        audio_session_deactivation_enabled: "true",
        zoom_enabled: "true",
        upload_main: "false",
        upload_main_image_quality: "1.0",
        upload_main_image_size: "1440",
        upload_thumbnail_image_quality: "1.0",
        upload_thumbnail_image_size: "1020"
    });

    // ============================================================
    // 4. BẠN BÈ, GIỚI HẠN & ĐỀ XUẤT KẾT BẠN
    // ============================================================
    Object.assign(obj.entries, {
        max_friends_count: "999999",
        friend_limit_mode: "0",
        soft_friend_limit_threshold_count: "999999",
        show_friend_limit_on_cam: "false",
        signup_max_friends_count: "999999",
        celebrity_inbox_limit: "999999",
        friend_limit_geo_override: JSON.stringify({ experiments: {}, area_code_overrides: {} }),
        friends_sheet_locket_count_config: JSON.stringify({
            items: [
                { threshold: 0, icon_name: "heart" },
                { threshold: 1, icon_name: "heart.fill" },
                { threshold: 10, emoji: "🤍" },
                { threshold: 100, emoji: "💛" },
                { threshold: 500, emoji: "❤️‍🔥" },
                { threshold: 1000, emoji: "🌟🫶🌟" },
                { threshold: 2000, emoji: "✨💟✨" },
                { threshold: 5000, emoji: "⚡️😵‍💫⚡" },
                { threshold: 10000, emoji: "✨⚡️😱⚡✨" }
            ]
        }),
        friend_locket_count_config: JSON.stringify({
            items: [
                { threshold: 0, icon_name: "heart" },
                { threshold: 1, icon_name: "heart.fill" },
                { threshold: 10, emoji: "🤍" },
                { threshold: 100, emoji: "💛" },
                { threshold: 500, emoji: "❤️‍🔥" },
                { threshold: 1000, emoji: "✨💗✨" },
                { threshold: 2000, emoji: "✨️⭐️✨" },
                { threshold: 5000, emoji: "✨💎✨" },
                { threshold: 10000, emoji: "✨🔐💛✨" }
            ]
        }),
        new_friends_monitoring_enabled: "true",
        improved_friend_suggestions: "true",
        show_friend_suggestions_by_default: "true",
        emoji_friend_suggestions: "true",
        prompt_contact_permissions_on_search: "true",
        populate_phone_numbers_from_suggest_friends: "true",
        hide_friends_enabled: "true",
        hide_invite_links: "false",
        hide_skip_contacts: "true",
        show_all_contacts: "true",
        show_invite_suggestions: "true",
        show_no_friends_bottom_sheet: "false",
        signup_allow_skip_add_friends: "true"
    });

    // ============================================================
    // 5. MOMENTS, STREAK, CHAT & TƯƠNG TÁC
    // ============================================================
    try {
        var streak = JSON.parse(obj.entries.streak_config || "{}");
        streak.minimum_recovery_count = 0;
        streak.minimum_display_count = 0;
        obj.entries.streak_config = JSON.stringify(streak);
    } catch (e) {}

    Object.assign(obj.entries, {
        moment_views_enabled: "true",
        moment_views_v2: "true",
        record_moment_views: "true",
        notify_moment_views: "true",
        get_moment_views_as_cloud_function: "true",
        moment_reactions_v2: "true",
        chat_reactions_enabled: "true",
        conversation_reactions: "true",
        typing_indicators_enabled: "true",
        unsend_message_enabled: "true",
        reply_prototype_enabled: "true",
        messages_integration: "true",
        conversations_enabled: "true",
        fetch_moments_in_conversation: "true",
        hide_chat_button: "false",
        groups_enabled: "true",
        send_to_self_only_mode: "always_enabled",
        time_travel_rewind_v2_enabled: "true",
        calendar_delete_moment_enabled: "true",
        calendar_rewind_enabled: "false",
        locket_yearbook_story_sharing_encouraged: "true",
        rollcall_enabled: "true",
        rollcall_comment_actions: "true",
        rollcall_profile_button: "true",
        rollcall_prompt_export_after_share: "true",
        rollcall_confirm_skip_tagging: "false",
        rollcall_tap_to_tag_enabled: "false"
    });

    // ============================================================
    // 6. WIDGET, THÔNG BÁO & GIAO DIỆN (JOURNAL / PROFILE)
    // ============================================================
    Object.assign(obj.entries, {
        widget_frame_event_max_images: "5",
        android_widget_frame_event_enabled: "true",
        widget_badge_enabled: "true",
        widget_badge_v2: "true",
        widget_stale_state_enabled: "false",
        widget_last_sent_indicator: "false",
        widget_sync_token_reload_mode: "clearTokenNever",
        widget_frame_event: JSON.stringify({
            uid: "midautumn_2026",
            url: "https://i.ibb.co/1Yt1Dzzy/Shin-chan-1.png",
            use_local_time_zone: true,
            placement: "below",
            start_at: "2020-01-01T00:00:00",
            end_at: "2099-12-31T23:59:59"
        }),
        live_activity_onboarding: "true",
        live_activity_onboarding_variant: "friending",
        register_live_activity_push_to_start_token: "true",
        live_activity_remove_stale_start_token: "true",
        notification_preferences_live_activities: "true",
        notification_preferences: "true",
        notification_reply_body_visible: "true",
        prompt_notification_permissions_after_friending: "true",
        activity_bar_enabled: "true",
        journal_activity_bar_enabled: "true",
        journal_settings: JSON.stringify({
            debug_menu_enabled: false,
            focus_animation: true,
            compact_header: true,
            friends_button: true,
            reverse_scroll_direction: false,
            streak_visualization: true,
            streak_visualization_style: "gradient",
            streak_header_minimum_count: 0,
            streak_visualization_minimum_count: 2,
            overlay_indicators: { location: true, music: true, static_content: true, weather: true }
        }),
        qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
        custom_profile_pics: "true",
        profile_menu_v2_enabled: "true"
    });

    // ============================================================
    // 7. HỆ THỐNG, CACHE & STORAGE CDN
    // ============================================================
    Object.assign(obj.entries, {
        cdn_domain_replacements: JSON.stringify({
            "firebasestorage.googleapis.com": "cdn.locketcamera.com"
        }),
        cdn_domain_replacements_video: "true",
        storage_bucket: "gs://locket-img",
        storage_bucket_video: "gs://locket-video",
        image_cache_max_age_sec: "157680000",
        image_cache_max_size: "400000000",
        history_cache_age_days: "1000",
        user_cache_max_age_sec: "691200",
        friends_cache_max_age_sec: "2592000",
        image_fetch_cache: "true",
        image_cache_use_shared: "true",
        use_doc_dir_for_image_cache: "true",
        efficient_history_cache_invalidation: "true",
        timestamp_based_history_fetches: "true",
        get_latest_moment_v2: "true",
        fetch_users_from_cloud_function: "true",
        refresh_interval: "60",
        firestore_refresh_v2: "true",
        firestore_refresh_v3: "true",
        keychain_access_retries: "true",
        blocked_users_cached_sync_enabled: "true",
        beta_features_enabled: "true",
        join_testflight_enabled: "true",
        safety_center: "true",
        help_center: "true",
        support_v2: "true",
        privacy_choices_setting: "true",
        request_att_permission: "true",
        invite_link_preview_variant: "4",
        share_history_config: JSON.stringify({ prompt_enabled: false, fetching_enabled: true }),
        share_history_prompt_enabled: "false",
        use_thumbnails_for_sharing: "true",
        use_thumbnails_in_timeline: "true",
        persist_onboarding_step: "true",
        onboarding_contact_permission_step: "true"
    });

    // ============================================================
    // 8. OVERLAY & CUSTOM CAPTIONS
    // ============================================================
    Object.assign(obj.entries, {
        overlay_navigator_enabled: "true",
        overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
        captions_enabled: "true",
        music_caption_enabled: "true",
        music_caption_song_preview_enabled: "true",
        link_caption_link_enabled: "true",
        overlay_dynamic_captions: JSON.stringify([
            "standard", "poll", "color_palette", "review", "music", "location",
            "weather", "time", "streak", "star_sign", "party_time", "locket_count",
            "good_morning", "goodnight", "ootd", "miss_you", "custom", "phunu_2010", "halloween_2026"
        ]),
        overlay_items: JSON.stringify([
            {
                section: "🎨 General",
                items: [
                    { overlay_id: "caption:standard", source: "local", caption: { type: "standard" } },
                    { overlay_id: "caption:review", source: "local", caption: { type: "review" } },
                    { overlay_id: "caption:music", source: "local", caption: { type: "music" } },
                    { overlay_id: "caption:location", source: "local", caption: { type: "location" } },
                    { overlay_id: "caption:weather", source: "local", caption: { type: "weather" } },
                    { overlay_id: "caption:time", source: "local", caption: { type: "time" } },
                    { overlay_id: "caption:streak", source: "local", caption: { type: "streak" } },
                    { overlay_id: "caption:star_sign", source: "local", caption: { type: "star_sign" } },
                    { overlay_id: "caption:poll", source: "local", caption: { type: "poll" } },
                    { overlay_id: "caption:color_palette", source: "local", caption: { type: "color_palette" } },
                    { overlay_id: "caption:locket_count", source: "local", caption: { type: "locket_count" } }
                ]
            },
            {
                section: "🎨 Holiday Caption",
                items: [
                    {
                        overlay_id: "caption:halloween_2026",
                        source: "remote",
                        caption: {
                            background: { colors: ["#150804", "#C8540D"] },
                            icon: { data: "🎃", type: "emoji" },
                            max_lines: 1,
                            text: "Halloween",
                            localized_text: { en: "Halloween", vn: "Halloween" },
                            text_color: "#FFB182",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:autumn_2026",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFE0A0", "#F6A53A"] },
                            icon: { data: "🍂", type: "emoji" },
                            max_lines: 1,
                            text: "Xin chào Mùa Thu",
                            localized_text: { en: "Xin chào Mùa Thu", vn: "Xin chào Mùa Thu" },
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:christmas_eve_2026",
                        source: "remote",
                        caption: {
                            background: { colors: ["#2FA85F", "#176B3A"] },
                            icon: { data: "🕯️", type: "emoji" },
                            max_lines: 1,
                            text: "Giáng sinh an lành",
                            localized_text: { en: "Giáng sinh an lành", vn: "Giáng sinh an lành" },
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:christmas_day_2026",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E53935", "#A81818"] },
                            icon: { data: "🎄", type: "emoji" },
                            max_lines: 1,
                            text: "Giáng sinh an lành",
                            localized_text: { en: "Giáng sinh an lành", vn: "Giáng sinh an lành" },
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:new_years_eve_2026",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFC64B", "#FFEDBF"] },
                            icon: { data: "🥂", type: "emoji" },
                            max_lines: 1,
                            text: "Xin chào 2027!",
                            localized_text: { en: "Xin chào 2027!", vn: "Xin chào 2027!" },
                            text_color: "#643F00",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:new_years_day_2027",
                        source: "remote",
                        caption: {
                            background: { colors: ["#3B00EC", "#823FFF"] },
                            icon: { data: "💫", type: "emoji" },
                            max_lines: 1,
                            text: "Xin chào 2027!",
                            localized_text: { en: "Xin chào 2027!", vn: "Xin chào 2027!" },
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:new_years_day_2027_alternate",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FF0062", "#FF783F"] },
                            max_lines: 1,
                            text: "2027",
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    }
                ]
            },
            {
                section: "🎨 Decorative by Locket",
                items: [
                    {
                        overlay_id: "caption:toi_nho_em",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFFFFF", "#6D9EEB"] },
                            max_lines: 1,
                            text: "보고 싶어 🥺",
                            text_color: "#000000E6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:party_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#5EFFF5", "#FCFF57"] },
                            icon: { data: "🪩", type: "emoji" },
                            max_lines: 1,
                            text: "Party Time!",
                            text_color: "#000000E6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:good_morning",
                        source: "remote",
                        daily_start_hour: 5,
                        daily_end_hour: 10,
                        caption: {
                            background: { colors: ["#EF7402", "#EABF0F"] },
                            icon: { data: "☀️", type: "emoji" },
                            max_lines: 1,
                            text: "Good morning",
                            text_color: "#FFFFFFE5",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:goodnight",
                        source: "remote",
                        daily_start_hour: 19.5,
                        daily_end_hour: 24,
                        caption: {
                            background: { colors: ["#370C6F", "#575CD4"] },
                            icon: { data: "🌙", type: "emoji" },
                            max_lines: 1,
                            text: "Goodnight",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:ootd",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFFFFF", "#DBDBDB"] },
                            icon: { data: "🕶", type: "emoji" },
                            max_lines: 1,
                            text: "OOTD",
                            text_color: "#101010E6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:miss_you",
                        source: "remote",
                        caption: {
                            background: { colors: ["#EC0C00", "#FF493F"] },
                            icon: { data: "🥰", type: "emoji" },
                            max_lines: 1,
                            text: "Miss you",
                            text_color: "#FFFFFFDB",
                            type: "static_content"
                        }
                    }
                ]
            },
            {
                section: "🎨 Decorative by Tan_loc",
                items: [
                    {
                        overlay_id: "caption:Tan Loc",
                        source: "remote",
                        caption: {
                            background: { colors: ["#B8E7FF", "#A8F5D0", "#DCCBFF"] },
                            max_lines: 1,
                            text: "💻 Tanlocdayne",
                            text_color: "#183153",
                            type: "static_content"
                        }
                    },
                    {
overlay_id: "caption:lockect_đã_xác_nhận_bạn_xinh_gái💕",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFD6A5", "#FFF1A8", "#FFC4D6"] },
                            max_lines: 1,
                            text: "locket đã xác nhận bạn xinh gái💕",
                            text_color: "#633B24",
                            type: "static_content"
                        }
                    },
                    {
overlay_id: "caption:locket_đã_xác_nhận_bạn_đẹp_trai🫪",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F8BBD0", "#E91E63"] },
                            icon: { data: "🫪", type: "emoji" },
                            max_lines: 1,
                            text: "locket đã xác nhận bạn đẹp trai",
                            localized_text: { en: "locket đã xác nhận bạn đẹp trai", vn: "Cảm thấy dthw" },
                            text_color: "#FFFFFFE5",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:feeling_cute",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F8BBD0", "#E91E63"] },
                            icon: { data: "🌷", type: "emoji" },
                            max_lines: 1,
                            text: "Feeling Cute",
                            localized_text: { en: "Feeling Cute", vn: "Cảm thấy dthw" },
                            text_color: "#FFFFFFE5",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:cu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFD6A5", "#FFF1A8", "#FFC4D6"] },
                            max_lines: 1,
                            text: "Cu 🐎",
                            text_color: "#633B24",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:wedding_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFE4E1", "#E73C7E"] },
                            icon: { data: "💍", type: "emoji" },
                            max_lines: 1,
                            text: "Wedding Time!",
                            localized_text: { en: "Wedding Time!", vn: "Đám cưới nè!" },
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:cam_thay_hanh_phuc",
                        source: "remote",
                        caption: {
                            background: { colors: ["#EC407A", "#F8BBD0"] },
                            icon: { data: "🇻🇳", type: "emoji" },
                            max_lines: 1,
                            text: "Cảm thấy hạnh phúc",
                            localized_text: { en: "Feeling Happy", vn: "Cảm thấy hạnh phúc" },
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:coffee_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#4E342E", "#8D6E63"] },
                            icon: { data: "☕", type: "emoji" },
                            max_lines: 1,
                            text: "Coffee Time!",
                            localized_text: { en: "Coffee Time!", vn: "Giờ uống cà phê!" },
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:snake_vibes",
                        source: "remote",
                        caption: {
                            background: { colors: ["#2E7D32", "#66BB6A"] },
                            icon: { data: "🐍", type: "emoji" },
                            max_lines: 1,
                            text: "Snake Vibes",
                            localized_text: { en: "Snake Vibes", vn: "Chất rắn" },
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:mixue_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFF9C4", "#F8BBD0"] },
                            icon: { data: "🍦", type: "emoji" },
                            max_lines: 1,
                            text: "Mixue Time!",
                            localized_text: { en: "Mixue Time!", vn: "Giờ Mixue!" },
                            text_color: "#000000E6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:locket_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#ECEFF1", "#B3E5FC"] },
                            icon: { data: "📷", type: "emoji" },
                            max_lines: 1,
                            text: "Locket Time!",
                            text_color: "#000000E6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:cinema_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#1A237E", "#455A64"] },
                            icon: { data: "🎬", type: "emoji" },
                            max_lines: 1,
                            text: "Cinema Time!",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:dating_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E91E63", "#F44336"] },
                            icon: { data: "💕", type: "emoji" },
                            max_lines: 1,
                            text: "Dating Time!",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:graduation_day",
                        source: "remote",
                        caption: {
                            background: { colors: ["#1A237E", "#283593"] },
                            icon: { data: "🎓", type: "emoji" },
                            max_lines: 1,
                            text: "Happy Graduation Day!",
                            localized_text: { en: "Happy Graduation Day!", vn: "Chúc mừng tốt nghiệp!" },
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:shopping_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#B3E5FC", "#FFFFFF"] },
                            icon: { data: "🛍️", type: "emoji" },
                            max_lines: 1,
                            text: "Shopping Time!",
                            localized_text: { en: "Shopping Time!", vn: "Giờ mua sắm!" },
                            text_color: "#000000E6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:dinner_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFCCBC", "#FF8A80"] },
                            icon: { data: "🍽️", type: "emoji" },
                            max_lines: 1,
                            text: "Dinner Time!",
                            localized_text: { en: "Dinner Time!", vn: "Giờ ăn tối!" },
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:chilling_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E1BEE7", "#F8BBD0"] },
                            icon: { data: "🌴", type: "emoji" },
                            max_lines: 1,
                            text: "Chilling Time!",
                            localized_text: { en: "Chilling Time!", vn: "Giờ thư giãn!" },
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    }
                ]
            },
                       {
                section: "🎨 Tình yêu & Cơm chó 💕",
                items: [
                    {
                        "overlay_id": "caption:bogo_sipeo",
                        source: "remote",
                        caption: {
                            background: { colors: ["#D8E8FC", "#82B1FF"] },
                            icon: { data: "🥺", type: "emoji" },
                            max_lines: 1,
                            text: "보고 싶어",
                            text_color: "#1A2238E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:em_nho_anhh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F48FB1", "#F8BBD0"] },
                            icon: { data: "🥺", type: "emoji" },
                            max_lines: 1,
                            text: "em nhớ anhh",
                            text_color: "#4A1C24E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:nho_anh_hoi_phien",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E6CEEA", "#F5E6F7"] },
                            icon: { data: "🥺", type: "emoji" },
                            max_lines: 1,
                            text: "nhớ anh tới mức hơi phiền",
                            text_color: "#3B2840E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:i_love_you",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F4A8C0", "#FCE4EC"] },
                            icon: { data: "💗", type: "emoji" },
                            max_lines: 1,
                            text: "i love you",
                            text_color: "#4A2030E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:yeu_cuc_dang",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F5B0C4", "#FDF0E6"] },
                            icon: { data: "🎀", type: "emoji" },
                            max_lines: 1,
                            text: "yêu cục dàng",
                            text_color: "#4A2530E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:yeu_emmm",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E2BDD2", "#F7EBF2"] },
                            icon: { data: "💗", type: "emoji" },
                            max_lines: 1,
                            text: "Yeu Emmm",
                            text_color: "#3D2232E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:yeu_anhhh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#B8D0F5", "#EAE0F8"] },
                            icon: { data: "🫶", type: "emoji" },
                            max_lines: 1,
                            text: "Yeu Anhhh",
                            text_color: "#222B45E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:baby_love",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F08CA8", "#E91E8C"] },
                            icon: { data: "🧸", type: "emoji" },
                            max_lines: 1,
                            text: "Baby Love 💖",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:muon_duoc_om",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F28B82", "#FAD2E1"] },
                            icon: { data: "🫂", type: "emoji" },
                            max_lines: 1,
                            text: "Muốn được ôm",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:cho_hun_mieng_coi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F2BCC2", "#FCE6D8"] },
                            icon: { data: "😘", type: "emoji" },
                            max_lines: 1,
                            text: "cho hun miếng coi",
                            text_color: "#4A2E2EE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:me_anh_hon_me_ngu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#B5C4F0", "#EADCF2"] },
                            icon: { data: "💤", type: "emoji" },
                            max_lines: 1,
                            text: "mê anh hơn mê ngủ",
                            text_color: "#2C3248E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:em_be_can_duoc_do",
                        source: "remote",
                        caption: {
                            background: { colors: ["#DF8A9E", "#FCE0EA"] },
                            icon: { data: "🎀", type: "emoji" },
                            max_lines: 1,
                            text: "em bé cần được dỗ",
                            text_color: "#4A202AE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:iu_thi_noi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F9C449", "#FDF0C8"] },
                            icon: { data: "🤭", type: "emoji" },
                            max_lines: 1,
                            text: "iu thì nói, đừng có ngại",
                            text_color: "#4A360CE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:iu_hong_thi_bao",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F26878", "#FCD0BA"] },
                            icon: { data: "🎀", type: "emoji" },
                            max_lines: 1,
                            text: "iu hong thì bảo",
                            text_color: "#4A181EE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:anh_co_thuong_em",
                        source: "remote",
                        caption: {
                            background: { colors: ["#8CB8F8", "#E0F2FC"] },
                            icon: { data: "🥹", type: "emoji" },
                            max_lines: 1,
                            text: "anh có thương em thiệt hong",
                            text_color: "#183258E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:yeu_em_la_nhiem_vu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#A2E0B8", "#E8F8EE"] },
                            icon: { data: "🫡", type: "emoji" },
                            max_lines: 1,
                            text: "yêu em là nhiệm vụ cả đời",
                            text_color: "#1C4028E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:crush_nhin_em",
                        source: "remote",
                        caption: {
                            background: { colors: ["#CFA2E8", "#F2E4F9"] },
                            icon: { data: "🫠", type: "emoji" },
                            max_lines: 1,
                            text: "crush nhìn em một cái là xong",
                            text_color: "#382045E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:anh_la_ngoai_le",
                        source: "remote",
                        caption: {
                            background: { colors: ["#74C6BE", "#DCF4F0"] },
                            icon: { data: "🫶", type: "emoji" },
                            max_lines: 1,
                            text: "anh là ngoại lệ của em",
                            text_color: "#163B38E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:dang_ban_tuong_tu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#2B3A8A", "#15B8C4"] },
                            icon: { data: "💭", type: "emoji" },
                            max_lines: 1,
                            text: "Đang bận tương tư",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:mac_bay_tinh_yeu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F48B94", "#FCE1E4"] },
                            icon: { data: "💘", type: "emoji" },
                            max_lines: 1,
                            text: "Mắc bẫy tình yêu",
                            text_color: "#1A1A1AE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:hong_ay_minh_cuoi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#D8A8C0", "#F2E4F5"] },
                            icon: { data: "💍", type: "emoji" },
                            max_lines: 1,
                            text: "hông ấy mình cưới nhau đi",
                            text_color: "#382635E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:wedding_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F8CCD8", "#EC6095"] },
                            icon: { data: "💍", type: "emoji" },
                            max_lines: 1,
                            text: "Wedding Time!",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:dating_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#D91E5B", "#F25C3B"] },
                            icon: { data: "💕", type: "emoji" },
                            max_lines: 1,
                            text: "Dating Time!",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:tuong_love_hoa_ra_lop",
                        source: "remote",
                        caption: {
                            background: { colors: ["#D41442", "#F7A1B5"] },
                            icon: { data: "❤️‍🩹", type: "emoji" },
                            max_lines: 1,
                            text: "Tưởng love hoá ra lốp",
                            text_color: "#2B0912E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:feeling_happy",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E03E7A", "#F7B5CD"] },
                            icon: { data: "🇻🇳", type: "emoji" },
                            max_lines: 1,
                            text: "Feeling Happy",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    }
                ]
            },
            {
                section: "🎨 Gen Z & Xéo xắt 💅",
                items: [
                    {
                        "overlay_id": "caption:feeling_cute",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F4A2B8", "#D91B68"] },
                            icon: { data: "🌷", type: "emoji" },
                            max_lines: 1,
                            text: "Feeling Cute",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:cutie_pie",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F9D5E0", "#F28AA8"] },
                            icon: { data: "🎀", type: "emoji" },
                            max_lines: 1,
                            text: "Cutie Pie 🌸",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:hello_kitty",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FADCE6", "#F7B2C4"] },
                            icon: { data: "🌸", type: "emoji" },
                            max_lines: 1,
                            text: "Hello Kitty 🐱",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:ngoan_xinh_iu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#EED2E6", "#F8EBF4"] },
                            icon: { data: "💗", type: "emoji" },
                            max_lines: 1,
                            text: "ngoan xinh iu của ai đây",
                            text_color: "#4A3242E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:xinh_dep_tuyet_voi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#EC387B", "#867AE9"] },
                            icon: { data: "💅", type: "emoji" },
                            max_lines: 1,
                            text: "Xinh đẹp tuyệt vời",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:hom_nay_cung_slay",
                        source: "remote",
                        caption: {
                            background: { colors: ["#C5B4E3", "#F2D5E8"] },
                            icon: { data: "✨", type: "emoji" },
                            max_lines: 1,
                            text: "hôm nay cũng slay",
                            text_color: "#362B48E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:tinh_hoa_hoi_tu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFE000", "#FF9000"] },
                            icon: { data: "✨", type: "emoji" },
                            max_lines: 1,
                            text: "Tinh hoa hội tụ",
                            text_color: "#1A1405E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:xinh_gai_an_phim_1",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F46B6B", "#EB3678"] },
                            icon: { data: "💅", type: "emoji" },
                            max_lines: 1,
                            text: "Xinh gái ấn phím 1",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:xinh_la_tai_nang",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F2C2D4", "#F7DFEA"] },
                            icon: { data: "🎀", type: "emoji" },
                            max_lines: 1,
                            text: "xinh là một loại tài năng",
                            text_color: "#4A2C38E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:dep_trai_co_gi_sai",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F25C05", "#F9B800"] },
                            icon: { data: "😎", type: "emoji" },
                            max_lines: 1,
                            text: "Đẹp trai có gì sai",
                            text_color: "#1A0D00E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:dep_khong_can_ly_do",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E2C2D8", "#F2E1ED"] },
                            icon: { data: "🪞", type: "emoji" },
                            max_lines: 1,
                            text: "đẹp không cần lý do",
                            text_color: "#422C3CE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:cha_nay_tu_luyen_ghe",
                        source: "remote",
                        caption: {
                            background: { colors: ["#A8EDE6", "#FED6E3"] },
                            icon: { data: "🪞", type: "emoji" },
                            max_lines: 1,
                            text: "Cha này tự luyến ghê",
                            text_color: "#1A1A1AE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:phu_tinh_khong_phu_ban",
                        source: "remote",
                        caption: {
                            background: { colors: ["#7928CA", "#6A11CB"] },
                            icon: { data: "🕶️", type: "emoji" },
                            max_lines: 1,
                            text: "Phụ tình không phụ bản thân",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:main_character",
                        source: "remote",
                        caption: {
                            background: { colors: ["#DCC4F0", "#F7D9E8"] },
                            icon: { data: "🎬", type: "emoji" },
                            max_lines: 1,
                            text: "main character của cuộc đời mình",
                            text_color: "#3B2848E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:vibe_doc_nhat",
                        source: "remote",
                        caption: {
                            background: { colors: ["#7FD8F5", "#D4F7E8"] },
                            icon: { data: "🪩", type: "emoji" },
                            max_lines: 1,
                            text: "vibe này ko phải ai cũng có",
                            text_color: "#143B42E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:khong_hoan_hao_nhung_co_khi_chat",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F7B267", "#FCECC9"] },
                            icon: { data: "😎", type: "emoji" },
                            max_lines: 1,
                            text: "không hoàn hảo nhưng có khí chất",
                            text_color: "#4A2E10E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:sieu_cap_ba_khi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#EC2F64", "#F25C48"] },
                            icon: { data: "🐉", type: "emoji" },
                            max_lines: 1,
                            text: "siêu cấp bá khí",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:ba_khi_ngang_nguoc",
                        source: "remote",
                        caption: {
                            background: { colors: ["#94B4D4", "#D6CFE6"] },
                            icon: { data: "😎", type: "emoji" },
                            max_lines: 1,
                            text: "bá khí ngang ngược",
                            text_color: "#1E2838E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:du_ba_khi_chua",
                        source: "remote",
                        caption: {
                            background: { colors: ["#C8B6E2", "#EDE4F7"] },
                            icon: { data: "👑", type: "emoji" },
                            max_lines: 1,
                            text: "Đủ bá khí chưa?",
                            text_color: "#322445E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:oach_xa_lach",
                        source: "remote",
                        caption: {
                            background: { colors: ["#137A63", "#22E47A"] },
                            icon: { data: "🥬", type: "emoji" },
                            max_lines: 1,
                            text: "oách xà lách",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:cung_cung_di",
                        source: "remote",
                        caption: {
                            background: { colors: ["#D95B38", "#F9C46B"] },
                            icon: { data: "🚀", type: "emoji" },
                            max_lines: 1,
                            text: "Cũng cứng đi",
                            text_color: "#38180AE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:ra_duong_ne_moi_anh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#CFD6E6", "#EAEFF8"] },
                            icon: { data: "🕶️", type: "emoji" },
                            max_lines: 1,
                            text: "Ra đường nể mỗi anh",
                            text_color: "#242B38E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:nhin_la_biet_uy_tin",
                        source: "remote",
                        caption: {
                            background: { colors: ["#2B7A9E", "#2C3E58"] },
                            icon: { data: "👌", type: "emoji" },
                            max_lines: 1,
                            text: "Nhìn là biết uy tín",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:flex_den_hoi_tho_cuoi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#2BC4A8", "#B2F7E2"] },
                            icon: { data: "💎", type: "emoji" },
                            max_lines: 1,
                            text: "Flex đến hơi thở cuối",
                            text_color: "#103830E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:tui_khong_hon_thua",
                        source: "remote",
                        caption: {
                            background: { colors: ["#9E1F32", "#DC7A88"] },
                            icon: { data: "😎", type: "emoji" },
                            max_lines: 1,
                            text: "tui không hơn thua, tui hơn hẳn",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:tui_hon_hom_qua",
                        source: "remote",
                        caption: {
                            background: { colors: ["#B8DCD2", "#E8EAD6"] },
                            icon: { data: "🫶", type: "emoji" },
                            max_lines: 1,
                            text: "tui không hơn ai, tui hơn hôm qua",
                            text_color: "#263832E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:khong_phai_gu_cua_tat_ca",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F2728C", "#FAD8C0"] },
                            icon: { data: "💅", type: "emoji" },
                            max_lines: 1,
                            text: "không phải gu của tất cả, may ghê",
                            text_color: "#4A1C24E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:ua_tuong_minh_quan_trong",
                        source: "remote",
                        caption: {
                            background: { colors: ["#7B78E8", "#C8C2F7"] },
                            icon: { data: "💅", type: "emoji" },
                            max_lines: 1,
                            text: "ủa tưởng mình quan trọng lắm hả",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:cai_net_ky_ghe",
                        source: "remote",
                        caption: {
                            background: { colors: ["#C6E472", "#EAF5C8"] },
                            icon: { data: "😒", type: "emoji" },
                            max_lines: 1,
                            text: "cái nết kỳ ghê",
                            text_color: "#2C3810E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:nau_xoi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#B2D942", "#F2FCC8"] },
                            icon: { data: "🙀", type: "emoji" },
                            max_lines: 1,
                            text: "Nấu xói",
                            text_color: "#223008E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:am_cha_hui",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F2C2D4", "#EDE2F5"] },
                            icon: { data: "🎀", type: "emoji" },
                            max_lines: 1,
                            text: "ăm chã húi, bà chã hơm",
                            text_color: "#4A2C3CE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:hong_drama",
                        source: "remote",
                        caption: {
                            background: { colors: ["#A82890", "#F76B1C"] },
                            icon: { data: "🍿", type: "emoji" },
                            max_lines: 1,
                            text: "Hóng drama",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:ke_chuyen_nghe_choi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#8A2482", "#E83858"] },
                            icon: { data: "🍿", type: "emoji" },
                            max_lines: 1,
                            text: "Kể chuyện nghe chơi",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:than_ai_nay_lo",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F2C49B", "#E2D8EC"] },
                            icon: { data: "🍿", type: "emoji" },
                            max_lines: 1,
                            text: "thân ai nấy lo, drama ai nấy hóng",
                            text_color: "#3D2E24E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:check_var_lien",
                        source: "remote",
                        caption: {
                            background: { colors: ["#20A882", "#32E078"] },
                            icon: { data: "📺", type: "emoji" },
                            max_lines: 1,
                            text: "Check VAR liền",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:co_bien_co_bien",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F24E1E", "#FFC814"] },
                            icon: { data: "🚨", type: "emoji" },
                            max_lines: 1,
                            text: "Có biến có biến",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:so_ho_la_bao",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F5B895", "#F7E2E2"] },
                            icon: { data: "🚨", type: "emoji" },
                            max_lines: 1,
                            text: "sơ hở là báo",
                            text_color: "#4A281CE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:bot_bao_gium_cai",
                        source: "remote",
                        caption: {
                            background: { colors: ["#82B2D4", "#DCEBF5"] },
                            icon: { data: "🚨", type: "emoji" },
                            max_lines: 1,
                            text: "bớt báo giùm cái",
                            text_color: "#1C3042E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:ai_so_thi_di_ve",
                        source: "remote",
                        caption: {
                            background: { colors: ["#C81E14", "#F25C24"] },
                            icon: { data: "🏃", type: "emoji" },
                            max_lines: 1,
                            text: "ai sợ thì đi về",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:chay_ngay_di",
                        source: "remote",
                        caption: {
                            background: { colors: ["#C81428", "#EB3252"] },
                            icon: { data: "🏃💨", type: "emoji" },
                            max_lines: 1,
                            text: "Chạy ngay đi",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:len_chua_khong_biet_lay_ai",
                        source: "remote",
                        caption: {
                            background: { colors: ["#D8D4CE", "#F2EFE9"] },
                            icon: { data: "🙏🥹", type: "emoji" },
                            max_lines: 1,
                            text: "lên chùa không biết lạy ai",
                            text_color: "#38322CE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:dam_nhau_khong",
                        source: "remote",
                        caption: {
                            background: { colors: ["#D92B2B", "#F57642"] },
                            icon: { data: "🥊", type: "emoji" },
                            max_lines: 1,
                            text: "đấm nhau không",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:hao_han",
                        source: "remote",
                        caption: {
                            background: { colors: ["#383058", "#D98A2B"] },
                            icon: { data: "🗡️", type: "emoji" },
                            max_lines: 1,
                            text: "Hảo hán",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:mong_ton_hoa_sen",
                        source: "remote",
                        caption: {
                            background: { colors: ["#C8A8E2", "#F7C8D8"] },
                            icon: { data: "🪷", type: "emoji" },
                            max_lines: 1,
                            text: "Mong tôn hoa sen thấy cảnh này",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:con_cai_nit",
                        source: "remote",
                        caption: {
                            background: { colors: ["#C8C4C0", "#A87C68"] },
                            icon: { data: "🧶", type: "emoji" },
                            max_lines: 1,
                            text: "còn cái nịt",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:minh_la_lop",
                        source: "remote",
                        caption: {
                            background: { colors: ["#2B4248", "#425258"] },
                            icon: { data: "🛞", type: "emoji" },
                            max_lines: 1,
                            text: "Mình là lốp",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:hay_ra_de_qua",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F5F095", "#95E2C8"] },
                            icon: { data: "🥹", type: "emoji" },
                            max_lines: 1,
                            text: "Hay ra dẻ quá à!",
                            text_color: "#1A241CE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:mac_co_qua_hai_oi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F5A642", "#F7C6C8"] },
                            icon: { data: "😭", type: "emoji" },
                            max_lines: 1,
                            text: "Mắc cỡ quá hai ơi",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:than_chua_ma_don",
                        source: "remote",
                        caption: {
                            background: { colors: ["#587488", "#485862"] },
                            icon: { data: "😔", type: "emoji" },
                            max_lines: 1,
                            text: "Thân chưa mà dỡn",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:ua_roi_ai_muon",
                        source: "remote",
                        caption: {
                            background: { colors: ["#EE7B30", "#FAD074"] },
                            icon: { data: "🤨", type: "emoji" },
                            max_lines: 1,
                            text: "ủa rồi ai mượn?",
                            text_color: "#381E08E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:co_ra_dai_khong",
                        source: "remote",
                        caption: {
                            background: { colors: ["#EC5868", "#F9C89B"] },
                            icon: { data: "😭", type: "emoji" },
                            max_lines: 1,
                            text: "có ra dại không",
                            text_color: "#3D1418E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:he_dieu_hanh_khac",
                        source: "remote",
                        caption: {
                            background: { colors: ["#4A8E7A", "#B2DCD0"] },
                            icon: { data: "🤨", type: "emoji" },
                            max_lines: 1,
                            text: "bạn mình nhưng hệ điều hành khác",
                            text_color: "#102820E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:ai_roi_cung_khac",
                        source: "remote",
                        caption: {
                            background: { colors: ["#383C42", "#788088"] },
                            icon: { data: "🤡", type: "emoji" },
                            max_lines: 1,
                            text: "ai rồi cũng khác, riêng bạn thì...",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:tuong_gi_hoa_ra_tuong_tuong",
                        source: "remote",
                        caption: {
                            background: { colors: ["#5C82E6", "#C2D8F7"] },
                            icon: { data: "🤡", type: "emoji" },
                            max_lines: 1,
                            text: "tưởng gì, hóa ra tưởng tượng",
                            text_color: "#142038E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:be_hong_co_sai",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F2B8C6", "#F7E2EC"] },
                            icon: { data: "😏", type: "emoji" },
                            max_lines: 1,
                            text: "bé hông có sai, tại đời sai",
                            text_color: "#4A242EE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:song_sao_cho_vua_long",
                        source: "remote",
                        caption: {
                            background: { colors: ["#C8A248", "#F7E6B2"] },
                            icon: { data: "😏", type: "emoji" },
                            max_lines: 1,
                            text: "sống sao cho vừa lòng thiên hạ",
                            text_color: "#382A0CE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:boc_trung_sit_rit",
                        source: "remote",
                        caption: {
                            background: { colors: ["#982498", "#581888"] },
                            icon: { data: "🎁", type: "emoji" },
                            max_lines: 1,
                            text: "Bóc trúng sít rịt",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:hen_lam_moi_xui",
                        source: "remote",
                        caption: {
                            background: { colors: ["#42B8B8", "#207888"] },
                            icon: { data: "😅", type: "emoji" },
                            max_lines: 1,
                            text: "Hên lắm mới xui được vậy á",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:ghet_dua_kia_ghe",
                        source: "remote",
                        caption: {
                            background: { colors: ["#485468", "#9EB0C8"] },
                            icon: { data: "😒", type: "emoji" },
                            max_lines: 1,
                            text: "ghét đứa kia ghê 😒",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:khong_ghet_chi_khong_ua",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F29E38", "#FCE2B2"] },
                            icon: { data: "😒", type: "emoji" },
                            max_lines: 1,
                            text: "không ghét, chỉ không ưa",
                            text_color: "#3D2408E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:toi_song_the_day",
                        source: "remote",
                        caption: {
                            background: { colors: ["#282C34", "#707888"] },
                            icon: { data: "😎", type: "emoji" },
                            max_lines: 1,
                            text: "Tôi sống thế đấy",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:che_manh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F23838", "#F9B824"] },
                            icon: { data: "👎", type: "emoji" },
                            max_lines: 1,
                            text: "Chê mạnh",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:chua_du_wow",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E698A8", "#FADCE2"] },
                            icon: { data: "🎀", type: "emoji" },
                            max_lines: 1,
                            text: "Chưa đủ wow",
                            text_color: "#4A2830E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:roi_let_luon",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F7A8C8", "#B8C6F7"] },
                            icon: { data: "💅", type: "emoji" },
                            max_lines: 1,
                            text: "rồi lét luôn",
                            text_color: "#1A1424E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:roi_gay_luon",
                        source: "remote",
                        caption: {
                            background: { colors: ["#C838F0", "#28C8F5"] },
                            icon: { data: "🌈", type: "emoji" },
                            max_lines: 1,
                            text: "rồi gay luôn",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    }
                ]
            },
            {
                section: "🎨 Meme & Hài hước 🤡",
                items: [
                    {
                        "overlay_id": "caption:cuoi_vcl_m_oi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FF8C00", "#FFEE00"] },
                            icon: { data: "😂", type: "emoji" },
                            max_lines: 1,
                            text: "Cười vcl m oi",
                            text_color: "#1A1200E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:cuoi_xiu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFD000", "#FF8800"] },
                            icon: { data: "😎", type: "emoji" },
                            max_lines: 1,
                            text: "Cười xỉu",
                            text_color: "#1A1000E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:luon_vui_tuoi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#00D2FF", "#3A7BD5"] },
                            icon: { data: "🤡", type: "emoji" },
                            max_lines: 1,
                            text: "Luôn vui tươi",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:con_vien_la_lan",
                        source: "remote",
                        caption: {
                            background: { colors: ["#A8C2A0", "#DCE8D8"] },
                            icon: { data: "🍂", type: "emoji" },
                            max_lines: 1,
                            text: "côn viên lá làn",
                            text_color: "#283824E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:gian_dang_iu_hong",
                        source: "remote",
                        caption: {
                            background: { colors: ["#B8E6C8", "#F7F2C8"] },
                            icon: { data: "🪳", type: "emoji" },
                            max_lines: 1,
                            text: "Gián đáng iu hong🎀",
                            text_color: "#28382CE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:hen_lam_moi_xui_meme",
                        source: "remote",
                        caption: {
                            background: { colors: ["#00B4DB", "#0083B0"] },
                            icon: { data: "😅", type: "emoji" },
                            max_lines: 1,
                            text: "Hên lắm mới xui được vậy á",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:giam_suc_manh_con_tuong",
                        source: "remote",
                        caption: {
                            background: { colors: ["#56AB2F", "#1CD8D2"] },
                            icon: { data: "🎮", type: "emoji" },
                            max_lines: 1,
                            text: "Giảm sức mạnh con tướng",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:phu_huynh_dung_xem",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FF0844", "#FFB199"] },
                            icon: { data: "🙈", type: "emoji" },
                            max_lines: 1,
                            text: "Phụ huynh đừng xem",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:khong_van_de_gi_luon",
                        source: "remote",
                        caption: {
                            background: { colors: ["#1D976C", "#93F9B9"] },
                            icon: { data: "👌", type: "emoji" },
                            max_lines: 1,
                            text: "Không vấn đề gì luôn",
                            text_color: "#0F2E28E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:xin_vinh_biet_cu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#232526", "#414345"] },
                            icon: { data: "🕯️", type: "emoji" },
                            max_lines: 1,
                            text: "Xin vĩnh biệt cụ",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    }
                ]
            },
            {
                section: "🎨 Bất ổn & Hết cứu 🫠",
                items: [
                    {
                        "overlay_id": "caption:bat_on_that_su",
                        source: "remote",
                        caption: {
                            background: { colors: ["#707A65", "#A8B068"] },
                            icon: { data: "🫠", type: "emoji" },
                            max_lines: 1,
                            text: "Bất ổn thật sự",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:nay_la_het_cuu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#607888", "#485862"] },
                            icon: { data: "❌", type: "emoji" },
                            max_lines: 1,
                            text: "Này là hết cứu",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:het_cuu_thiet_chu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#B2C2E8", "#E6D8EC"] },
                            icon: { data: "🫠", type: "emoji" },
                            max_lines: 1,
                            text: "hết cứu thiệt chứ",
                            text_color: "#242838E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:toi_cong_chuyen_nua_roi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E6AD94", "#F7DFE6"] },
                            icon: { data: "💀", type: "emoji" },
                            max_lines: 1,
                            text: "tới công chuyện nữa rồi",
                            text_color: "#3D2A24E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:toang_that_roi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#EB241E", "#B21814"] },
                            icon: { data: "🐉", type: "emoji" },
                            max_lines: 1,
                            text: "Toang thật rồi",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:toi_roi_toi_roi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F53828", "#F9B248"] },
                            icon: { data: "❗", type: "emoji" },
                            max_lines: 1,
                            text: "Tới rồi tới rồi",
                            text_color: "#2B0C05E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:goi_xong_lun_a",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E8B2A6", "#F7DFE2"] },
                            icon: { data: "😭", type: "emoji" },
                            max_lines: 1,
                            text: "gòi xong lun á",
                            text_color: "#422824E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:xiu_ngang_xiu_doc",
                        source: "remote",
                        caption: {
                            background: { colors: ["#B2AED8", "#EBD8EC"] },
                            icon: { data: "💀", type: "emoji" },
                            max_lines: 1,
                            text: "xĩu ngang xĩu dọc",
                            text_color: "#2C283CE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:guc_nga",
                        source: "remote",
                        caption: {
                            background: { colors: ["#481878", "#B84268"] },
                            icon: { data: "📉", type: "emoji" },
                            max_lines: 1,
                            text: "Gục ngã",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:bat_luc",
                        source: "remote",
                        caption: {
                            background: { colors: ["#204858", "#3898D4"] },
                            icon: { data: "🏳️", type: "emoji" },
                            max_lines: 1,
                            text: "Bất lực",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:rot_nuoc_mat",
                        source: "remote",
                        caption: {
                            background: { colors: ["#20A8C8", "#0A1868"] },
                            icon: { data: "😭", type: "emoji" },
                            max_lines: 1,
                            text: "Rớt nước mắt",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:tien_dinh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#B81D58", "#2B1D68"] },
                            icon: { data: "🌪️", type: "emoji" },
                            max_lines: 1,
                            text: "Tiền đình",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:nao_dang_bao_tri",
                        source: "remote",
                        caption: {
                            background: { colors: ["#B8DCD2", "#DCE6F2"] },
                            icon: { data: "🧠", type: "emoji" },
                            max_lines: 1,
                            text: "não đang bảo trì",
                            text_color: "#263832E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:overthinking_vai_chuong",
                        source: "remote",
                        caption: {
                            background: { colors: ["#425A68", "#388894"] },
                            icon: { data: "🤯", type: "emoji" },
                            max_lines: 1,
                            text: "Overthinking vai chưởng",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:tram_cam_nhe",
                        source: "remote",
                        caption: {
                            background: { colors: ["#322E38", "#686478"] },
                            icon: { data: "🫠", type: "emoji" },
                            max_lines: 1,
                            text: "Trầm cảm nhẹ",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:khong_cam_xuc",
                        source: "remote",
                        caption: {
                            background: { colors: ["#2C2E30", "#121416"] },
                            icon: { data: "🗿", type: "emoji" },
                            max_lines: 1,
                            text: "Không cảm xúc",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:mieng_cuoi_long_khoc",
                        source: "remote",
                        caption: {
                            background: { colors: ["#8CA8BE", "#DCE8F0"] },
                            icon: { data: "🙂", type: "emoji" },
                            max_lines: 1,
                            text: "miệng cười nhưng lòng thì khóc",
                            text_color: "#1E2C38E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:hom_nay_toi_buon",
                        source: "remote",
                        caption: {
                            background: { colors: ["#1C2D3D", "#263B52"] },
                            icon: { data: "🥀", type: "emoji" },
                            max_lines: 1,
                            text: "hôm nay tôi buồn",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:dem_nay_ai_om_noi_buon",
                        source: "remote",
                        caption: {
                            background: { colors: ["#2A3E68", "#7B98B8"] },
                            icon: { data: "🌙", type: "emoji" },
                            max_lines: 1,
                            text: "đêm nay ai ôm nỗi buồn",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:em_on_on_ap_luc",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F5A64C", "#FCE29C"] },
                            icon: { data: "🥲", type: "emoji" },
                            max_lines: 1,
                            text: "em ổn, ổn áp lực",
                            text_color: "#3D2408E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:thoi_thi_minh_lai_mot_minh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#B2B8D8", "#E6DCE8"] },
                            icon: { data: "🫂", type: "emoji" },
                            max_lines: 1,
                            text: "thôi thì mình lại một mình",
                            text_color: "#282C40E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:tui_la_nan_nhan",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E6B2C6", "#F7E6EC"] },
                            icon: { data: "🥹", type: "emoji" },
                            max_lines: 1,
                            text: "tui là nạn nhân",
                            text_color: "#422430E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:oi_ai_cuu_tui",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E8A89A", "#F7E2E0"] },
                            icon: { data: "🆘", type: "emoji" },
                            max_lines: 1,
                            text: "òi ai cứu tui",
                            text_color: "#42221CE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:song_gio_phu_doi_trai",
                        source: "remote",
                        caption: {
                            background: { colors: ["#3E1E68", "#D46A7E"] },
                            icon: { data: "🌪️", type: "emoji" },
                            max_lines: 1,
                            text: "Sóng gió phủ đời trai",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:thuong_nguoi_khong_thuong_minh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#B89EB8", "#E8D2E4"] },
                            icon: { data: "💔", type: "emoji" },
                            max_lines: 1,
                            text: "thương người không thương mình",
                            text_color: "#362436E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:lai_tu_minh_da_tinh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#6878A8", "#D4A8C4"] },
                            icon: { data: "🫠", type: "emoji" },
                            max_lines: 1,
                            text: "lại tự mình đa tình",
                            text_color: "#202438E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:chac_tai_minh_khong_du_tot",
                        source: "remote",
                        caption: {
                            background: { colors: ["#ACC2D4", "#DCD6E2"] },
                            icon: { data: "🌧️", type: "emoji" },
                            max_lines: 1,
                            text: "chắc tại mình không đủ tốt",
                            text_color: "#24303CE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:mot_chut_hy_vong",
                        source: "remote",
                        caption: {
                            background: { colors: ["#9E2A42", "#E6A898"] },
                            icon: { data: "🥀", type: "emoji" },
                            max_lines: 1,
                            text: "một chút hy vọng, một đống thất vọng",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:het_duyen_hay_het_thuong",
                        source: "remote",
                        caption: {
                            background: { colors: ["#3E5870", "#8298AC"] },
                            icon: { data: "💭", type: "emoji" },
                            max_lines: 1,
                            text: "hết duyên hay hết thương?",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:nguoi_vui_co_nho_nguoi_buon",
                        source: "remote",
                        caption: {
                            background: { colors: ["#5C6E78", "#B8C6CE"] },
                            icon: { data: "🩶", type: "emoji" },
                            max_lines: 1,
                            text: "người vui có nhớ người buồn không",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:da_xem_chua_rep_da_dau",
                        source: "remote",
                        caption: {
                            background: { colors: ["#3878E8", "#A8D4F7"] },
                            icon: { data: "📱", type: "emoji" },
                            max_lines: 1,
                            text: "đã xem, chưa rep, đã đau",
                            text_color: "#102448E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:dung_im_lang_voi_em_ma",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F2688A", "#FAD8E2"] },
                            icon: { data: "🥹", type: "emoji" },
                            max_lines: 1,
                            text: "đừng im lặng với em mà",
                            text_color: "#421824E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:nho_thi_nho_quay_lai_thi_thoi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E6A238", "#F9E2A8"] },
                            icon: { data: "🙂", type: "emoji" },
                            max_lines: 1,
                            text: "nhớ thì nhớ, quay lại thì thôi",
                            text_color: "#382406E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:em_hong_co_doi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#8CB858", "#DCE8B8"] },
                            icon: { data: "🥲", type: "emoji" },
                            max_lines: 1,
                            text: "em hong có dỗi, em chỉ buồn",
                            text_color: "#203010E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:doi_roi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#EC5858", "#F7C288"] },
                            icon: { data: "😤", type: "emoji" },
                            max_lines: 1,
                            text: "Dỗi rồi",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:thui_mu_dung_choc_be",
                        source: "remote",
                        caption: {
                            background: { colors: ["#D8BED8", "#F5E8F2"] },
                            icon: { data: "🥺", type: "emoji" },
                            max_lines: 1,
                            text: "thui mừ đừng có chọc bé",
                            text_color: "#382638E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:dung_co_lam_be_quao",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E68A48", "#F9DFB8"] },
                            icon: { data: "😾", type: "emoji" },
                            max_lines: 1,
                            text: "đừng có làm bé quạo",
                            text_color: "#381E0AE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:xin_lui_duoc_chua",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E6C668", "#F7C8A8"] },
                            icon: { data: "🥺", type: "emoji" },
                            max_lines: 1,
                            text: "Xin lũi được chưa",
                            text_color: "#1A1408E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:bic_goi_kho_lem",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E6825C", "#F7DCB8"] },
                            icon: { data: "🥲", type: "emoji" },
                            max_lines: 1,
                            text: "bíc gòi khổ lém",
                            text_color: "#381C10E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:hong_be_oi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#82C6AC", "#DCECE2"] },
                            icon: { data: "🥺", type: "emoji" },
                            max_lines: 1,
                            text: "hong bé ơi",
                            text_color: "#18362CE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:khum_co_bic_nua",
                        source: "remote",
                        caption: {
                            background: { colors: ["#5868B8", "#C8CEF2"] },
                            icon: { data: "🫠", type: "emoji" },
                            max_lines: 1,
                            text: "khum có bíc nữa",
                            text_color: "#161C38E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:cai_deo_ma",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E86842", "#F7D29C"] },
                            icon: { data: "🤬", type: "emoji" },
                            max_lines: 1,
                            text: "cái đéo má ??",
                            text_color: "#38160AE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:cai_gi_vay_troi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E84828", "#F9C478"] },
                            icon: { data: "❗", type: "emoji" },
                            max_lines: 1,
                            text: "Cái gì vậy trời",
                            text_color: "#381006E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:khong_the_tin_noi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#3838C8", "#8884E8"] },
                            icon: { data: "❓", type: "emoji" },
                            max_lines: 1,
                            text: "Không thể tin nổi",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:vl_m_oi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#384248", "#626E78"] },
                            icon: { data: "😨", type: "emoji" },
                            max_lines: 1,
                            text: "vl m ơi?",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:ua_alo_hoi_cham",
                        source: "remote",
                        caption: {
                            background: { colors: ["#D99826", "#FCE89C"] },
                            icon: { data: "🐱", type: "emoji" },
                            max_lines: 1,
                            text: "Ủa alo ❓",
                            text_color: "#362404E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:ua_alo_gi_da",
                        source: "remote",
                        caption: {
                            background: { colors: ["#1FA288", "#A2EED8"] },
                            icon: { data: "😭", type: "emoji" },
                            max_lines: 1,
                            text: "Ủa alo, gì dạ?",
                            text_color: "#0E342CE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:ho_hoi_cham",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E83E52", "#F7A888"] },
                            icon: { data: "🤨", type: "emoji" },
                            max_lines: 1,
                            text: "hỏ?",
                            text_color: "#380E12E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:noi_chuyen_nghe_mac_met",
                        source: "remote",
                        caption: {
                            background: { colors: ["#684878", "#C4A8D4"] },
                            icon: { data: "🫠", type: "emoji" },
                            max_lines: 1,
                            text: "nói chuyện nghe mắc mệt",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:dung_la_het_noi_noi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#688258", "#C8D8A8"] },
                            icon: { data: "🙄", type: "emoji" },
                            max_lines: 1,
                            text: "đúng là hết nói nổi",
                            text_color: "#1C2614E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:chan_bo_may_di",
                        source: "remote",
                        caption: {
                            background: { colors: ["#780A78", "#F26842"] },
                            icon: { data: "🙄", type: "emoji" },
                            max_lines: 1,
                            text: "Chan bố mày đi",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:lai_phai_lo",
                        source: "remote",
                        caption: {
                            background: { colors: ["#74C6B8", "#E6F0A8"] },
                            icon: { data: "🫠", type: "emoji" },
                            max_lines: 1,
                            text: "lại phải lọ",
                            text_color: "#1A342CE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:tuyet_doi_khong_nghe",
                        source: "remote",
                        caption: {
                            background: { colors: ["#EB2868", "#F54828"] },
                            icon: { data: "🙉", type: "emoji" },
                            max_lines: 1,
                            text: "Tuyệt đối không nghe",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:khong_biet_khong_thay",
                        source: "remote",
                        caption: {
                            background: { colors: ["#C8DCD4", "#F7DFD4"] },
                            icon: { data: "🙈", type: "emoji" },
                            max_lines: 1,
                            text: "không biết, không thấy, không nghe",
                            text_color: "#2C3430E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:noi_it_thoi_lo_het",
                        source: "remote",
                        caption: {
                            background: { colors: ["#1E7888", "#94C8C0"] },
                            icon: { data: "🤫", type: "emoji" },
                            max_lines: 1,
                            text: "nói ít thôi, lộ hết bây giờ",
                            text_color: "#0C282CE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:nguoi_im_lang_gap_nguoi_hay_noi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#2B3038", "#687482"] },
                            icon: { data: "🤐", type: "emoji" },
                            max_lines: 1,
                            text: "Người im lặng gặp người hay nói",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:noi_het_bi_mat_co_yeu_hong",
                        source: "remote",
                        caption: {
                            background: { colors: ["#C4A8D8", "#DCE2F7"] },
                            icon: { data: "🤭", type: "emoji" },
                            max_lines: 1,
                            text: "Nói hết bí mật thì có yêu hong",
                            text_color: "#2C2436E6",
                            type: "static_content"
                        }
                    }
                ]
            },
            {
                section: "🎨 Deadline & Tiền bạc 💸",
                items: [
                    {
                        "overlay_id": "caption:deadline_di_tut_quan",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E61428", "#98241C"] },
                            icon: { data: "🔥", type: "emoji" },
                            max_lines: 1,
                            text: "Deadline dí tụt quần",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:doi_cho_gi_nhan_nay",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F5D6A8", "#E8E2EC"] },
                            icon: { data: "📚", type: "emoji" },
                            max_lines: 1,
                            text: "đời cho gì nhận nấy, trừ deadline",
                            text_color: "#362A1CE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:di_lam_vi_dam_me",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFB800", "#F26418"] },
                            icon: { data: "🤡", type: "emoji" },
                            max_lines: 1,
                            text: "Đi làm vì đam mê",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:ca_o_ran_doc",
                        source: "remote",
                        caption: {
                            background: { colors: ["#184824", "#48A842"] },
                            icon: { data: "🐍", type: "emoji" },
                            max_lines: 1,
                            text: "Cả ổ rắn độc",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:can_nap_cafein_gap",
                        source: "remote",
                        caption: {
                            background: { colors: ["#162834", "#284858"] },
                            icon: { data: "☕", type: "emoji" },
                            max_lines: 1,
                            text: "Cần nạp cafein gấp",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:tien_dau_ma_tieu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#18B878", "#38E088"] },
                            icon: { data: "💸", type: "emoji" },
                            max_lines: 1,
                            text: "Tiền đâu mà tiêu",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:luc_nao_co_tien_moi_di",
                        source: "remote",
                        caption: {
                            background: { colors: ["#182830", "#24424A"] },
                            icon: { data: "💸", type: "emoji" },
                            max_lines: 1,
                            text: "Lúc nào có tiền thì mới đi á",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:doc_so_tai_khoan",
                        source: "remote",
                        caption: {
                            background: { colors: ["#1878E8", "#18D2FF"] },
                            icon: { data: "💳", type: "emoji" },
                            max_lines: 1,
                            text: "đọc số tài khoản",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:co_tien_lam_phien_thien_ha",
                        source: "remote",
                        caption: {
                            background: { colors: ["#C8AD78", "#F7EBD2"] },
                            icon: { data: "💰", type: "emoji" },
                            max_lines: 1,
                            text: "Có tiền làm phiền thiên hạ",
                            text_color: "#362A14E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:co_tien_thi_noi_chuyen_tiep",
                        source: "remote",
                        caption: {
                            background: { colors: ["#0C7862", "#78CCB8"] },
                            icon: { data: "💸", type: "emoji" },
                            max_lines: 1,
                            text: "có tiền thì nói chuyện tiếp",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:doc_lap_tai_chinh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#C8D4C0", "#F2ECD8"] },
                            icon: { data: "💰", type: "emoji" },
                            max_lines: 1,
                            text: "độc lập tài chính, độc thân tình cảm",
                            text_color: "#2C3428E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:cu_tu_tu_khoai_se_nhu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#68B828", "#98E058"] },
                            icon: { data: "🥔", type: "emoji" },
                            max_lines: 1,
                            text: "Cứ từ từ khoai sẽ nhừ",
                            text_color: "#142404E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:kiem_tra_nhan_pham",
                        source: "remote",
                        caption: {
                            background: { colors: ["#6E58B8", "#E6ACC8"] },
                            icon: { data: "🎲", type: "emoji" },
                            max_lines: 1,
                            text: "Kiểm tra nhân phẩm",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    }
                ]
            },
            {
                section: "🎨 Daily & Đời sống ☕",
                items: [
                    {
                        "overlay_id": "caption:ngay_moi_vui_ve",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFB800", "#FCE89C"] },
                            icon: { data: "☀️", type: "emoji" },
                            max_lines: 1,
                            text: "Ngày mới vui vẻ",
                            text_color: "#3D2800E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:coffee_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#4A3832", "#78584E"] },
                            icon: { data: "☕", type: "emoji" },
                            max_lines: 1,
                            text: "Coffee Time!",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:matcha_latte",
                        source: "remote",
                        caption: {
                            background: { colors: ["#B8DEC0", "#82C882"] },
                            icon: { data: "🍃", type: "emoji" },
                            max_lines: 1,
                            text: "Matcha Latte 🍵",
                            text_color: "#1C4220E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:mixue_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FCECC9", "#F7B8D2"] },
                            icon: { data: "🍦", type: "emoji" },
                            max_lines: 1,
                            text: "Mixue Time!",
                            text_color: "#24141AE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:tien_khong_mua_duoc_tat_ca",
                        source: "remote",
                        caption: {
                            background: { colors: ["#D8BC88", "#F7EFE0"] },
                            icon: { data: "🧋", type: "emoji" },
                            max_lines: 1,
                            text: "tiền không mua được tất cả, nhưng mua được trà sữa",
                            text_color: "#382C18E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:an_com_chua",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F28200", "#FF9800"] },
                            icon: { data: "🍽️", type: "emoji" },
                            max_lines: 1,
                            text: "Ăn cơm chưa?",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:dinner_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F28888", "#FAD4C8"] },
                            icon: { data: "🍽️", type: "emoji" },
                            max_lines: 1,
                            text: "Dinner Time!",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:di_choi_khong",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E01860", "#C81858"] },
                            icon: { data: "✈️", type: "emoji" },
                            max_lines: 1,
                            text: "Đi chơi không?",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:tuyet_voi_uong_nao",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F5CC88", "#F7D8C8"] },
                            icon: { data: "🥂", type: "emoji" },
                            max_lines: 1,
                            text: "tuyệt vời, uống nào!",
                            text_color: "#3D2C18E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:shopping_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#9CD8F7", "#EAF6FC"] },
                            icon: { data: "🛍️", type: "emoji" },
                            max_lines: 1,
                            text: "Shopping Time!",
                            text_color: "#142430E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:cinema_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#242878", "#385268"] },
                            icon: { data: "🎬", type: "emoji" },
                            max_lines: 1,
                            text: "Cinema Time!",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:tuyet_doi_dien_anh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#283842", "#425864"] },
                            icon: { data: "📷", type: "emoji" },
                            max_lines: 1,
                            text: "Tuyệt đối điện ảnh",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:qua_la_dien_anh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#189882", "#107868"] },
                            icon: { data: "📷", type: "emoji" },
                            max_lines: 1,
                            text: "Quá là điện ảnh",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:locket_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E6F4F8", "#A8DCF0"] },
                            icon: { data: "📷", type: "emoji" },
                            max_lines: 1,
                            text: "Locket Time!",
                            text_color: "#102028E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:chilling_time",
                        source: "remote",
                        caption: {
                            background: { colors: ["#D8A2C8", "#F2CEE6"] },
                            icon: { data: "🌴", type: "emoji" },
                            max_lines: 1,
                            text: "Chilling Time!",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:happy_graduation_day",
                        source: "remote",
                        caption: {
                            background: { colors: ["#1E2488", "#283298"] },
                            icon: { data: "🎓", type: "emoji" },
                            max_lines: 1,
                            text: "Happy Graduation Day!",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:hoi_chieu_troi_mua",
                        source: "remote",
                        caption: {
                            background: { colors: ["#486268", "#2B3C42"] },
                            icon: { data: "🌧️", type: "emoji" },
                            max_lines: 1,
                            text: "Hồi chiều trời mưa...",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:rainy_day",
                        source: "remote",
                        caption: {
                            background: { colors: ["#704E48", "#A89892"] },
                            icon: { data: "☕", type: "emoji" },
                            max_lines: 1,
                            text: "Rainy Day ☕🌧️",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:cam_lanh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#32A2C8", "#68C8E6"] },
                            icon: { data: "🤧", type: "emoji" },
                            max_lines: 1,
                            text: "Cảm lạnh",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:nhin_bau_troi_da_ly_huong",
                        source: "remote",
                        caption: {
                            background: { colors: ["#C8AAE2", "#A8B8E8"] },
                            icon: { data: "🌌", type: "emoji" },
                            max_lines: 1,
                            text: "nhìn bầu trời màu dạ lý hương",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:night_vibes",
                        source: "remote",
                        caption: {
                            background: { colors: ["#9898D8", "#C8B8F2"] },
                            icon: { data: "🪐", type: "emoji" },
                            max_lines: 1,
                            text: "Night Vibes 🌌",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:2am_thoughts",
                        source: "remote",
                        caption: {
                            background: { colors: ["#182830", "#284852"] },
                            icon: { data: "💭", type: "emoji" },
                            max_lines: 1,
                            text: "2:00 AM Thoughts 🌙",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:ngu_ngon",
                        source: "remote",
                        caption: {
                            background: { colors: ["#243898", "#322878"] },
                            icon: { data: "🌙", type: "emoji" },
                            max_lines: 1,
                            text: "Ngủ ngon",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:sweet_dream",
                        source: "remote",
                        caption: {
                            background: { colors: ["#94C4F7", "#DCEFFC"] },
                            icon: { data: "☁️", type: "emoji" },
                            max_lines: 1,
                            text: "Sweet Dream 🧊",
                            text_color: "#182C48E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:nhiem_vu_he_thong_di_ngu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#28306E", "#6272C8"] },
                            icon: { data: "🫡", type: "emoji" },
                            max_lines: 1,
                            text: "nhiệm vụ hệ thống: đi ngủ",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:da_den_luc_tat_nguon",
                        source: "remote",
                        caption: {
                            background: { colors: ["#363482", "#8C9EE8"] },
                            icon: { data: "😴", type: "emoji" },
                            max_lines: 1,
                            text: "đã đến lúc tắt nguồn",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:nao_nghi_lam_tay_van_online",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F26A1B", "#FAD27A"] },
                            icon: { data: "🤡", type: "emoji" },
                            max_lines: 1,
                            text: "não nghỉ làm, tay vẫn online",
                            text_color: "#381804E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:buon_ngu_nhung_chua_chiu_ngu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#8A2BE2", "#C8A8E8"] },
                            icon: { data: "🫠", type: "emoji" },
                            max_lines: 1,
                            text: "buồn ngủ nhưng chưa chịu ngủ",
                            text_color: "#220838E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:canh_bao_pin_nguoi_dung",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E02818", "#F5A638"] },
                            icon: { data: "🚨", type: "emoji" },
                            max_lines: 1,
                            text: "cảnh báo: pin người dùng còn 1%",
                            text_color: "#380A04E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:nhiem_vu_hom_nay_nam_im",
                        source: "remote",
                        caption: {
                            background: { colors: ["#288898", "#BCE698"] },
                            icon: { data: "🛌", type: "emoji" },
                            max_lines: 1,
                            text: "nhiệm vụ hôm nay: nằm im",
                            text_color: "#10282CE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:mai_tinh_nay_ngu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#383C42", "#889098"] },
                            icon: { data: "💀", type: "emoji" },
                            max_lines: 1,
                            text: "mai tính, nay ngủ",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:offline_de_hoi_sinh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#288890", "#B8DCD8"] },
                            icon: { data: "💤", type: "emoji" },
                            max_lines: 1,
                            text: "offline để hồi sinh",
                            text_color: "#0E2C30E6",
                            type: "static_content"
                        }
                    }
                ]
            },
            {
                section: "🎨 Chứng nhận của Locket",
                items: [
                    {
                        "overlay_id": "caption:locket_xac_nhan_cutii",
                        source: "remote",
                        caption: {
                            background: { colors: ["#1898D8", "#2CA8E8"] },
                            icon: { data: "✅", type: "emoji" },
                            max_lines: 1,
                            text: "Locket xác nhận bạn cutii",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:locket_xac_nhan_xjnh_gai",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F5B828", "#FAD258"] },
                            icon: { data: "✅", type: "emoji" },
                            max_lines: 1,
                            text: "Locket xác nhận bạn xjnh gái",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:locket_xac_nhan_dep_chai",
                        source: "remote",
                        caption: {
                            background: { colors: ["#1878D8", "#2888E8"] },
                            icon: { data: "✅", type: "emoji" },
                            max_lines: 1,
                            text: "Locket xác nhận bạn đẹp chai",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:locket_xac_nhan_dangiu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E84268", "#F25878"] },
                            icon: { data: "✅", type: "emoji" },
                            max_lines: 1,
                            text: "Locket xác nhận bạn dangiu",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:da_xac_minh_gai_dep",
                        source: "remote",
                        caption: {
                            background: { colors: ["#EB6890", "#F582A8"] },
                            icon: { data: "✅", type: "emoji" },
                            max_lines: 1,
                            text: "Đã xác minh bạn là gái đẹp",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:da_xac_minh_trai_dep",
                        source: "remote",
                        caption: {
                            background: { colors: ["#2882D8", "#4298E8"] },
                            icon: { data: "✅", type: "emoji" },
                            max_lines: 1,
                            text: "Đã xác minh bạn là trai đẹp",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:da_xac_nhan_be_ngoan",
                        source: "remote",
                        caption: {
                            background: { colors: ["#D498A8", "#E6B2C0"] },
                            icon: { data: "✅", type: "emoji" },
                            max_lines: 1,
                            text: "Đã xác nhận bạn là bé ngoan",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                                     {
                        "overlay_id": "caption:locket_tuyen_duong_cute",
                        source: "remote",
                        caption: {
                            background: { colors: ["#C82858", "#D83868"] },
                            icon: { data: "✅", type: "emoji" },
                            max_lines: 1,
                            text: "Locket tuyên dương bạn cute",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    }
                ]
            },
            {
                section: "🎖️ tlocbavl",
                items: [
                    {
                        "overlay_id": "caption:Tloc_gold",
                        source: "remote",
                        caption: {
                            background: { colors: ["#D9A828", "#E8C868"] },
                            icon: { data: "🏅", type: "emoji" },
                            max_lines: 1,
                            text: "✦ Tloc bá quá ✦",
                            text_color: "#382804E6",
                            type: "static_content"
                        }
                    },
                    {
                        "overlay_id": "caption:tloc_snow",
                        source: "remote",
                        caption: {
                            background: { colors: ["#82B8F5", "#C2DCF9"] },
                            icon: { data: "❄️", type: "emoji" },
                            max_lines: 1,
                            text: "❄️ Tlocvn ❄️",
                            text_color: "#142C4CE6",
                            type: "static_content"
                        }
                    }
                ]
            },
            {
                section: "🌸 Độc lạ",

                items: [
                    {
                        overlay_id: "caption:xin_vinh_biet_cu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#232526", "#414345"] },
                            icon: { data: "🕯️", type: "emoji" },
                            max_lines: 1,
                            text: "Xin vĩnh biệt cụ",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:chay_ngay_di",
                        source: "remote",
                        caption: {
                            background: { colors: ["#D31027", "#EA384D"] },
                            icon: { data: "🏃💨", type: "emoji" },
                            max_lines: 1,
                            text: "Chạy ngay đi",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:cu_tu_tu_khoai_se_nhu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#56AB2F", "#A8E063"] },
                            icon: { data: "🥔", type: "emoji" },
                            max_lines: 1,
                            text: "Cứ từ từ khoai sẽ nhừ",
                            text_color: "#000000E6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:kiem_tra_nhan_pham",
                        source: "remote",
                        caption: {
                            background: { colors: ["#654EA3", "#EAAFC8"] },
                            icon: { data: "🎲", type: "emoji" },
                            max_lines: 1,
                            text: "Kiểm tra nhân phẩm",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:doc_so_tai_khoan",
                        source: "remote",
                        caption: {
                            background: { colors: ["#1E90FF", "#00D4FF"] },
                            icon: { data: "💳", type: "emoji" },
                            max_lines: 1,
                            text: "đọc số tài khoản",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:ai_so_thi_di_ve",
                        source: "remote",
                        caption: {
                            background: { colors: ["#B71C1C", "#FF5722"] },
                            icon: { data: "🏃", type: "emoji" },
                            max_lines: 1,
                            text: "ai sợ thì đi về",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:con_cai_nit",
                        source: "remote",
                        caption: {
                            background: { colors: ["#D7CCC8", "#8D6E63"] },
                            icon: { data: "🧶", type: "emoji" },
                            max_lines: 1,
                            text: "còn cái nịt",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:canh_bao_co_hat",
                        source: "remote",
                        caption: {
                            background: { colors: ["#9C27B0", "#E91E63"] },
                            icon: { data: "🎤", type: "emoji" },
                            max_lines: 1,
                            text: "cảnh báo có hát",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:than_chua_ma_don",
                        source: "remote",
                        caption: {
                            background: { colors: ["#607D8B", "#37474F"] },
                            icon: { data: "😔", type: "emoji" },
                            max_lines: 1,
                            text: "Thân chưa mà dỡn",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:ai_muon",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E91E63", "#F44336"] },
                            icon: { data: "🤔", type: "emoji" },
                            max_lines: 1,
                            text: "Ai mượn?",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:hay_ra_de_qua_a",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFF59D", "#80DEEA"] },
                            icon: { data: "🥺", type: "emoji" },
                            max_lines: 1,
                            text: "Hay ra dẻ quá à!",
                            text_color: "#000000E6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:giam_suc_manh_con_tuong",
                        source: "remote",
                        caption: {
                            background: { colors: ["#4CAF50", "#00BCD4"] },
                            icon: { data: "🎮", type: "emoji" },
                            max_lines: 1,
                            text: "Giảm sức mạnh con tướng",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:mac_co_qua_hai_oi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFB74D", "#F8BBD0"] },
                            icon: { data: "😭", type: "emoji" },
                            max_lines: 1,
                            text: "Mắc cỡ quá hai ơi",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:minh_la_lop",
                        source: "remote",
                        caption: {
                            background: { colors: ["#263238", "#455A64"] },
                            icon: { data: "🛞", type: "emoji" },
                            max_lines: 1,
                            text: "Mình là lốp",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:dep_trai_co_gi_sai",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FF5722", "#FFC107"] },
                            icon: { data: "😎", type: "emoji" },
                            max_lines: 1,
                            text: "Đẹp trai có gì sai",
                            text_color: "#000000E6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:mong_ton_hoa_sen",
                        source: "remote",
                        caption: {
                            background: { colors: ["#D8B4E2", "#F8BBD0"] },
                            icon: { data: "🪷", type: "emoji" },
                            max_lines: 1,
                            text: "Mong tôn hoa sen thấy cảnh này",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:dam_nhau_khong",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E53935", "#FF7043"] },
                            icon: { data: "🥊", type: "emoji" },
                            max_lines: 1,
                            text: "đấm nhau không",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:sieu_cap_ba_khi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#EC407A", "#F44336"] },
                            icon: { data: "🐉", type: "emoji" },
                            max_lines: 1,
                            text: "siêu cấp bá khí",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:du_an_ma",
                        source: "remote",
                        caption: {
                            background: { colors: ["#263238", "#455A64"] },
                            icon: { data: "👻", type: "emoji" },
                            max_lines: 1,
                            text: "dự án ma",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:doi_roi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FF5F6D", "#FFC371"] },
                            icon: { data: "😤", type: "emoji" },
                            max_lines: 1,
                            text: "Dỗi rồi",
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:dang_ban_tuong_tu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#1A2980", "#26D0CE"] },
                            icon: { data: "💭", type: "emoji" },
                            max_lines: 1,
                            text: "Đang bận tương tư",
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:mo_hon_nhung_tam_hien",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFB75E", "#ED8F03"] },
                            icon: { data: "🐤", type: "emoji" },
                            max_lines: 1,
                            text: "Mỏ hỗn nhưng tâm hiền",
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:muon_duoc_om",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FF9A9E", "#FECFEF"] },
                            icon: { data: "🫂", type: "emoji" },
                            max_lines: 1,
                            text: "Muốn được ôm",
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                ]
            },
            {
                section: "🌸 Trend TikTok",
                items: [
                    {
                        overlay_id: "caption:hoi_chieu_troi_mua",
                        source: "remote",
                        caption: {
                            background: { colors: ["#546E7A", "#263238"] },
                            icon: { data: "🌧️", type: "emoji" },
                            max_lines: 1,
                            text: "Hồi chiều trời mưa...",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:con_vien_la_lan",
                        source: "remote",
                        caption: {
                            background: { colors: ["#12C2E9", "#F64F59"] },
                            icon: { data: "🍂", type: "emoji" },
                            max_lines: 1,
                            text: "côn viên lá làn",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:tuyet_doi_khong_nghe",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FF416C", "#FF4B2B"] },
                            icon: { data: "🙉", type: "emoji" },
                            max_lines: 1,
                            text: "Tuyệt đối không nghe",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:flex_den_hoi_tho_cuoi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F7971E", "#FFD200"] },
                            icon: { data: "💎", type: "emoji" },
                            max_lines: 1,
                            text: "Flex đến hơi thở cuối",
                            text_color: "#000000E6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:overthinking_vai_chuong",
                        source: "remote",
                        caption: {
                            background: { colors: ["#2C3E50", "#4CA1AF"] },
                            icon: { data: "🤯", type: "emoji" },
                            max_lines: 1,
                            text: "Overthinking vai chưởng",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:chan_bo_may_di",
                        source: "remote",
                        caption: {
                            background: { colors: ["#870000", "#190A05"] },
                            icon: { data: "🙄", type: "emoji" },
                            max_lines: 1,
                            text: "Chan bố mày đi",
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:oach_xa_lach",
                        source: "remote",
                        caption: {
                            background: { colors: ["#11998E", "#38EF7D"] },
                            icon: { data: "🥬", type: "emoji" },
                            max_lines: 1,
                            text: "oách xà lách",
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:ua_alo",
                        source: "remote",
                        caption: {
                            background: { colors: ["#8E2DE2", "#4A00E0"] },
                            icon: { data: "📞", type: "emoji" },
                            max_lines: 1,
                            text: "Ủa alo",
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:ke_chuyen_nghe_choi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#8A2387", "#E94057"] },
                            icon: { data: "🍿", type: "emoji" },
                            max_lines: 1,
                            text: "Kể chuyện nghe chơi",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:hom_nay_toi_buon",
                        source: "remote",
                        caption: {
                            background: { colors: ["#141E30", "#243B55"] },
                            icon: { data: "🥀", type: "emoji" },
                            max_lines: 1,
                            text: "hôm nay tôi buồn",
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:xinh_dep_tuyet_voi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FC5C7D", "#6A82FB"] },
                            icon: { data: "💅", type: "emoji" },
                            max_lines: 1,
                            text: "Xinh đẹp tuyệt vời",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:tram_cam_nhe",
                        source: "remote",
                        caption: {
                            background: { colors: ["#1F1C2C", "#928DAB"] },
                            icon: { data: "🫠", type: "emoji" },
                            max_lines: 1,
                            text: "Trầm cảm nhẹ",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:chua_du_wow",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FF5349", "#EB0C00"] },
                            icon: { data: "⭐", type: "emoji" },
                            max_lines: 1,
                            text: "Chưa đủ wow",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:boc_trung_sit_rit",
                        source: "remote",
                        caption: {
                            background: { colors: ["#9C27B0", "#7B1FA2"] },
                            icon: { data: "🎁", type: "emoji" },
                            max_lines: 1,
                            text: "Bóc trúng sít rịt",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:hen_lam_moi_xui_duoc_vay_a",
                        source: "remote",
                        caption: {
                            background: { colors: ["#00BCD4", "#0097A7"] },
                            icon: { data: "😅", type: "emoji" },
                            max_lines: 1,
                            text: "Hèn lắm mới xui được vậy á",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:ra_duong_ne_moi_anh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#2196F3", "#1976D2"] },
                            icon: { data: "👤", type: "emoji" },
                            max_lines: 1,
                            text: "Ra đường nể mỗi anh",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:cung_cung_di",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFC107", "#FFA000"] },
                            icon: { data: "🚀", type: "emoji" },
                            max_lines: 1,
                            text: "Cũng cứng đi",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:tuyet_doi_dien_anh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#455A64", "#263238"] },
                            icon: { data: "📷", type: "emoji" },
                            max_lines: 1,
                            text: "Tuyệt đối điện ảnh",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:du_ba_khi_chua",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FF5722", "#E64A19"] },
                            icon: { data: "⚡", type: "emoji" },
                            max_lines: 1,
                            text: "Đủ bá khí chưa",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:ua_alo",
                        source: "remote",
                        caption: {
                            background: { colors: ["#9C27B0", "#7B1FA2"] },
                            icon: { data: "❓", type: "emoji" },
                            max_lines: 1,
                            text: "Ủa alo?",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:cai_gi_vay_troi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F44336", "#D32F2F"] },
                            icon: { data: "❗", type: "emoji" },
                            max_lines: 1,
                            text: "Cái gì vậy trời",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:nay_la_het_cuu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#607D8B", "#455A64"] },
                            icon: { data: "❌", type: "emoji" },
                            max_lines: 1,
                            text: "Này là hết cứu",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:qua_la_dien_anh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#26A69A", "#00897B"] },
                            icon: { data: "📷", type: "emoji" },
                            max_lines: 1,
                            text: "Quá là điện ảnh",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    }
                ]
            },
            {
                section: "Gen Z Life 🩻",
                items: [
                    {
                        overlay_id: "caption:hao_han",
                        source: "remote",
                        caption: {
                            background: { colors: ["#114357", "#F29492"] },
                            icon: { data: "🗡️", type: "emoji" },
                            max_lines: 1,
                            text: "Hảo hán",
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:cam_lanh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#2193B0", "#6DD5ED"] },
                            icon: { data: "🤧", type: "emoji" },
                            max_lines: 1,
                            text: "Cảm lạnh",
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:bat_luc",
                        source: "remote",
                        caption: {
                            background: { colors: ["#2C3E50", "#3498DB"] },
                            icon: { data: "🏳️", type: "emoji" },
                            max_lines: 1,
                            text: "Bất lực",
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:xin_lui_duoc_chua",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F6D365", "#FDA085"] },
                            icon: { data: "🥺", type: "emoji" },
                            max_lines: 1,
                            text: "Xin lũi được chưa",
                            text_color: "#000000",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:rot_nuoc_mat",
                        source: "remote",
                        caption: {
                            background: { colors: ["#1CB5E0", "#000046"] },
                            icon: { data: "😭", type: "emoji" },
                            max_lines: 1,
                            text: "Rớt nước mắt",
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:guc_nga",
                        source: "remote",
                        caption: {
                            background: { colors: ["#3A1C71", "#D76D77"] },
                            icon: { data: "📉", type: "emoji" },
                            max_lines: 1,
                            text: "Gục ngã",
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:tien_dinh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#C33764", "#1D2671"] },
                            icon: { data: "🌪️", type: "emoji" },
                            max_lines: 1,
                            text: "Tiền đình",
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:che_manh",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FF4E50", "#F9D423"] },
                            icon: { data: "👎", type: "emoji" },
                            max_lines: 1,
                            text: "Chê mạnh",
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:xinh_gai_an_phim_1",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F77062", "#FE5196"] },
                            icon: { data: "💅", type: "emoji" },
                            max_lines: 1,
                            text: "Xinh gái ấn phím 1",
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:di_lam_vi_dam_me",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FDC830", "#F37335"] },
                            icon: { data: "🤡", type: "emoji" },
                            max_lines: 1,
                            text: "Đi làm vì đam mê",
                            text_color: "#FFFFFF",
                            type: "static_content"
                        }
                    }
                ]
            },
            {
                section: "🌸 Meme vui nhộn",
                items: [
                    {
                        overlay_id: "caption:cuoi_xiu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFEB3B", "#FF9800"] },
                            icon: { data: "😎", type: "emoji" },
                            max_lines: 1,
                            text: "Cười xỉu",
                            text_color: "#000000E6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:toang_that_roi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F44336", "#B71C1C"] },
                            icon: { data: "🐉", type: "emoji" },
                            max_lines: 1,
                            text: "Toang thật rồi",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:toi_roi_toi_roi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#673AB7", "#512DA8"] },
                            icon: { data: "❗", type: "emoji" },
                            max_lines: 1,
                            text: "Tới rồi tới rồi",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:khong_the_tin_noi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#00BCD4", "#0097A7"] },
                            icon: { data: "❓", type: "emoji" },
                            max_lines: 1,
                            text: "Không thể tin nổi",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    }
                ]
            },
            {
                section: "🌸 Đời sống",
                items: [
                    {
                        overlay_id: "caption:ngay_moi_vui_ve",
                        source: "remote",
                        caption: {
                            background: { colors: ["#4CAF50", "#2E7D32"] },
                            icon: { data: "☀️", type: "emoji" },
                            max_lines: 1,
                            text: "Ngày mới vui vẻ",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:ngu_ngon",
                        source: "remote",
                        caption: {
                            background: { colors: ["#3F51B5", "#1A237E"] },
                            icon: { data: "🌙", type: "emoji" },
                            max_lines: 1,
                            text: "Ngủ ngon",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:an_com_chua",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FF9800", "#F57C00"] },
                            icon: { data: "🍽️", type: "emoji" },
                            max_lines: 1,
                            text: "Ăn cơm chưa?",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:di_choi_khong",
                        source: "remote",
                        caption: {
                            background: { colors: ["#E91E63", "#C2185B"] },
                            icon: { data: "✈️", type: "emoji" },
                            max_lines: 1,
                            text: "Đi chơi không?",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    }
                ]
            },
            {
                section: "🌸 Gen Z Slay",
                items: [
                    {
                        overlay_id: "caption:tinh_hoa_hoi_tu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFD700", "#FF8C00"] },
                            icon: { data: "✨", type: "emoji" },
                            max_lines: 1,
                            text: "Tinh hoa hội tụ",
                            text_color: "#000000E6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:phu_tinh_khong_phu_ban",
                        source: "remote",
                        caption: {
                            background: { colors: ["#8E2DE2", "#4A00E0"] },
                            icon: { data: "🕶️", type: "emoji" },
                            max_lines: 1,
                            text: "Phụ tình không phụ bản",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:ngoan_xinh_yeu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FFAFBD", "#FFC3A0"] },
                            icon: { data: "🌸", type: "emoji" },
                            max_lines: 1,
                            text: "Ngoan xinh yêu của ai?",
                            text_color: "#000000E6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:nhin_la_biet_uy_tin",
                        source: "remote",
                        caption: {
                            background: { colors: ["#2980B9", "#2C3E50"] },
                            icon: { data: "👌", type: "emoji" },
                            max_lines: 1,
                            text: "Nhìn là biết uy tín",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    }
                ]
            },
            {
                section: "🌸 Bất ổn & Khó đỡ",
                items: [
                    {
                        overlay_id: "caption:luon_vui_tuoi",
                        source: "remote",
                        caption: {
                            background: { colors: ["#00F2FE", "#4FACFE"] },
                            icon: { data: "🤡", type: "emoji" },
                            max_lines: 1,
                            text: "Luôn vui tươi",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:bat_on_that_su",
                        source: "remote",
                        caption: {
                            background: { colors: ["#636363", "#A2AB58"] },
                            icon: { data: "🫠", type: "emoji" },
                            max_lines: 1,
                            text: "Bất ổn thật sự",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:khong_cam_xuc",
                        source: "remote",
                        caption: {
                            background: { colors: ["#434343", "#000000"] },
                            icon: { data: "🗿", type: "emoji" },
                            max_lines: 1,
                            text: "Không cảm xúc",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:phu_huynh_dung_xem",
                        source: "remote",
                        caption: {
                            background: { colors: ["#FF0844", "#FFB199"] },
                            icon: { data: "🙈", type: "emoji" },
                            max_lines: 1,
                            text: "Phụ huynh đừng xem",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    }
                ]
            },
            {
                section: "🌸 Check VAR & Hóng hớt",
                items: [
                    {
                        overlay_id: "caption:check_var",
                        source: "remote",
                        caption: {
                            background: { colors: ["#11998E", "#38EF7D"] },
                            icon: { data: "📺", type: "emoji" },
                            max_lines: 1,
                            text: "Check VAR liền",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:qua_nhieu_su_de_thuong",
                        source: "remote",
                        caption: {
                            background: { colors: ["#F38181", "#FCE38A"] },
                            icon: { data: "🎀", type: "emoji" },
                            max_lines: 1,
                            text: "Quá nhiều sự dễ thương",
                            text_color: "#000000E6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:mac_bay_tinh_yeu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#EE9CA7", "#FFDDE1"] },
                            icon: { data: "💘", type: "emoji" },
                            max_lines: 1,
                            text: "Mắc bẫy tình yêu",
                            text_color: "#000000E6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:song_gio_phu_doi_trai",
                        source: "remote",
                        caption: {
                            background: { colors: ["#3A1C71", "#D76D77"] },
                            icon: { data: "🌪️", type: "emoji" },
                            max_lines: 1,
                            text: "Sóng gió phủ đời trai",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    }
                ]
            },
            {
                section: "🌸 Góc Deadline & Đi Làm",
                items: [
                    {
                        overlay_id: "caption:deadline_ruot",
                        source: "remote",
                        caption: {
                            background: { colors: ["#ED213A", "#93291E"] },
                            icon: { data: "🔥", type: "emoji" },
                            max_lines: 1,
                            text: "Deadline dí tụt quần",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:tien_dau_ma_tieu",
                        source: "remote",
                        caption: {
                            background: { colors: ["#11998E", "#38EF7D"] },
                            icon: { data: "💸", type: "emoji" },
                            max_lines: 1,
                            text: "Tiền đâu mà tiêu",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    },
                    {
                        overlay_id: "caption:nghien_cuu_khoa_hoc",
                        source: "remote",
                        caption: {
                            background: { colors: ["#0F2027", "#2C5364"] },
                            icon: { data: "☕", type: "emoji" },
                            max_lines: 1,
                            text: "Cần nạp cafein gấp",
                            text_color: "#FFFFFFE6",
                            type: "static_content"
                        }
                    }
                ]
            }
        ])
    });
}

$done({ body: JSON.stringify(obj) });
