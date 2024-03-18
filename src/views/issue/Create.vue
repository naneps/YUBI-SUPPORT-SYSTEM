import { InputField } from '@/components';
<template>
  <GridRow>
    <GridColumn>
      <Card hasFooter hasHeader>
        <template #header>
          <h4>Create New Issue</h4>
        </template>
        <input-field
            label="Title"
            placeholder="Enter issue title"
        ></input-field>
        <template #footer>
          <div class="button-group float-right">
            <Button type="danger" outline class="mr-2">Cancel</Button>
            <Button type="success">Save</Button>
          </div>
        </template>
      </Card>
    </GridColumn>
  </GridRow>
</template>
<script setup>
</script>
<style></style>
