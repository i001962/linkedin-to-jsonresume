/**
 * Lookup keys for the standard profileView object
 */
const liSchemaKeys = {
    profile: '*profile',
    certificates: '*certificationView',
    education: '*educationView',
    workPositions: '*positionView',
    workPositionGroups: '*positionGroupView',
    skills: '*skillView',
    projects: '*projectView',
    attachments: '*summaryTreasuryMedias',
    volunteerWork: '*volunteerExperienceView',
    awards: '*honorView',
    publications: '*publicationView'
};
/**
 * Try to maintain a mapping between generic section types, and LI's schema
 *  - tocKeys are pointers that often point to a collection of URNs
 *  - Try to put dash strings last, profileView first
 *  - Most recipes are dash only
 */
const liTypeMappings = {
    profile: {
        // There is no tocKey for profile in dash FullProfileWithEntries,
        // due to how entry-point is configured
        tocKeys: ['*profile'],
        types: [
            // regular profileView
            'com.linkedin.voyager.identity.profile.Profile',
            // dash FullProfile
            'com.linkedin.voyager.dash.identity.profile.Profile'
        ],
        recipes: ['com.linkedin.voyager.dash.deco.identity.profile.FullProfileWithEntities']
    },
    certificates: {
        tocKeys: ['*certificationView', '*profileCertifications'],
        types: ['com.linkedin.voyager.dash.identity.profile.Certification'],
        recipes: ['com.linkedin.voyager.dash.deco.identity.profile.FullProfileCertification']
    },
    education: {
        tocKeys: ['*educationView', '*profileEducations'],
        types: [
            'com.linkedin.voyager.identity.profile.Education',
            // Dash
            'com.linkedin.voyager.dash.identity.profile.Education'
        ],
        recipes: ['com.linkedin.voyager.dash.deco.identity.profile.FullProfileEducation']
    },
    // Individual work entries (not aggregate (workgroup) with date range)
    workPositions: {
        tocKeys: ['*positionView', '*profilePositionGroups'],
        types: ['com.linkedin.voyager.identity.profile.Position', 'com.linkedin.voyager.dash.identity.profile.Position'],
        recipes: ['com.linkedin.voyager.dash.deco.identity.profile.FullProfilePosition']
    },
    skills: {
        tocKeys: ['*skillView', '*profileSkills'],
        types: ['com.linkedin.voyager.identity.profile.Skill', 'com.linkedin.voyager.dash.identity.profile.Skill'],
        recipes: ['com.linkedin.voyager.dash.deco.identity.profile.FullProfileSkill']
    },
    projects: {
        tocKeys: ['*projectView', '*profileProjects'],
        types: ['com.linkedin.voyager.identity.profile.Project', 'com.linkedin.voyager.dash.identity.profile.Project'],
        recipes: ['com.linkedin.voyager.dash.deco.identity.profile.FullProfileProject']
    },
    attachments: {
        tocKeys: ['*summaryTreasuryMedias', '*profileTreasuryMediaPosition'],
        types: ['com.linkedin.voyager.identity.profile.Certification', 'com.linkedin.voyager.dash.identity.profile.treasury.TreasuryMedia'],
        recipes: ['com.linkedin.voyager.dash.deco.identity.profile.FullProfileTreasuryMedia']
    },
    volunteerWork: {
        tocKeys: ['*volunteerExperienceView', '*profileVolunteerExperiences'],
        types: ['com.linkedin.voyager.dash.identity.profile.VolunteerExperience'],
        recipes: ['com.linkedin.voyager.dash.deco.identity.profile.FullProfileVolunteerExperience']
    },
    awards: {
        tocKeys: ['*honorView', '*profileHonors'],
        types: ['com.linkedin.voyager.identity.profile.Honor', 'com.linkedin.voyager.dash.identity.profile.Honor'],
        recipes: ['com.linkedin.voyager.dash.deco.identity.profile.FullProfileHonor']
    },
    publications: {
        tocKeys: ['*publicationView', '*profilePublications'],
        types: ['com.linkedin.voyager.identity.profile.Publication', 'com.linkedin.voyager.dash.identity.profile.Publication'],
        recipes: ['com.linkedin.voyager.dash.deco.identity.profile.FullProfilePublication']
    }
};

module.exports = {
    liSchemaKeys,
    liTypeMappings
};
