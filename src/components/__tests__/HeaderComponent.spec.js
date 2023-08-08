import { describe, it, expect } from "vitest";
import { shallowMount, mount } from "@vue/test-utils";
import HeaderComponent from "@/components/organisms/HeaderComponent.vue";
import VkButton from "@/components/atoms/vkButton.vue";

describe("HeaderComponent.vue test", () => {
  const wrapper = shallowMount(HeaderComponent);

  it("O nome da logo deve estar correta", () => {
    expect(wrapper.find(".logo").find("span").text()).toMatch("Kanban Vue.");
  });

  it("Deve ter botão para adicionar novas tarefas", () => {
    expect(wrapper.find(".button-area").find("button"));
  });

  it("Ao clicar no botão, deve alterar o  valor da propriedade para true", () => {
    const wrapper = mount(HeaderComponent);
    wrapper.findComponent(VkButton).vm.$emit("action");
    expect(wrapper.vm.showModal).toBeTruthy();
  });
});
