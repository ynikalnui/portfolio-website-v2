import type { Schema, Struct } from '@strapi/strapi';

export interface RepeatableComponentsMultipleText
  extends Struct.ComponentSchema {
  collectionName: 'components_repeatable_components_multiple_texts';
  info: {
    description: '';
    displayName: 'MultipleText';
  };
  attributes: {
    content: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'repeatable-components.multiple-text': RepeatableComponentsMultipleText;
    }
  }
}
