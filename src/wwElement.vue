<template>
  <div class="ww-smart-tree" @mousedown="onRootMouseDown">
    <!-- спрайты иконок без изменений -->
    <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
      <defs>
        <g id="icon-folder">
          <path d="M6.67188 2C7.34056 2.00002 7.96502 2.33424 8.33594 2.89062L8.74219 3.5H12.7422C13.5707 3.5 14.2419 4.1715 14.2422 5H4.50781C3.49917 5 2.64855 5.7511 2.52344 6.75195L1.74219 13L1.80957 13.0186C1.80821 12.9366 1.8159 12.8528 1.83594 12.7686L3.08105 7.53711C3.29551 6.63611 4.10117 6 5.02734 6H14.2344C14.8801 6.00021 15.3565 6.60325 15.207 7.23145L13.9619 12.4629C13.7475 13.3639 12.9418 14 12.0156 14H2.80859C2.6454 13.9999 2.49356 13.9603 2.35938 13.8926C1.56953 13.6252 1.00002 12.8801 1 12V4C1 2.89545 1.89545 2.00002 3 2H6.67188Z" fill="#5E90ED"/>
        </g>
        <g id="icon-item">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0.666992C8.34983 0.666992 8.69284 0.760243 8.99609 0.93457L8.99707 0.933594L13.6641 3.60059L13.667 3.60156C13.9707 3.77692 14.2229 4.02939 14.3984 4.33301C14.5739 4.63665 14.6666 4.98132 14.667 5.33203V10.667C14.6666 11.0174 14.5737 11.3616 14.3984 11.665C14.223 11.9686 13.9706 12.2211 13.667 12.3965L13.6641 12.3984L8.99902 15.0625L9 15.0635C8.7036 15.2346 8.3683 15.3256 8.02637 15.3301C8.01759 15.3304 8.00886 15.333 8 15.333C7.99081 15.333 7.98176 15.3304 7.97266 15.3301C7.63107 15.3254 7.29612 15.2344 7 15.0635L2.33594 12.3984L2.33301 12.3965C2.02941 12.2211 1.77702 11.9686 1.60156 11.665C1.42626 11.3616 1.33343 11.0174 1.33301 10.667V5.33203C1.33337 4.98132 1.42606 4.63665 1.60156 4.33301C1.77707 4.02939 2.02931 3.77692 2.33301 3.60156L2.33594 3.60059L7.00293 0.933594C7.30636 0.758993 7.64989 0.666992 8 0.666992ZM2.66699 10.665L2.67285 10.752C2.68428 10.8383 2.712 10.9221 2.75586 10.998C2.8138 11.0983 2.89713 11.1819 2.99707 11.2402L7.33301 13.7178V8.38477L2.66699 5.70605V10.665ZM11.3145 6.86426C11.3062 6.86867 11.2985 6.87388 11.29 6.87793L8.66699 8.38379V13.7178L13.0029 11.2402C13.1029 11.1819 13.1862 11.0983 13.2441 10.998C13.3024 10.8971 13.3328 10.7826 13.333 10.666V5.70605L11.3145 6.86426ZM3.34473 4.55762L8 7.22949L9.65625 6.27832L4.99805 3.61328L3.34473 4.55762ZM8 2.00098C7.88309 2.00098 7.76827 2.03144 7.66699 2.08984L7.66406 2.0918L6.34277 2.8457L10.9961 5.50879L12.6543 4.55762L8.33594 2.0918L8.33301 2.08984C8.23173 2.03144 8.11691 2.00098 8 2.00098Z" fill="black"/>
        </g>
        <g id="icon-delete">
          <path d="M6.66699 6.50293C7.12516 6.50306 7.49689 6.87485 7.49707 7.33301V11.333C7.49707 11.7913 7.12528 12.163 6.66699 12.1631C6.2086 12.1631 5.83691 11.7914 5.83691 11.333V7.33301C5.8371 6.87477 6.20871 6.50293 6.66699 6.50293Z" fill="#DA2828"/>
          <path d="M9.33301 6.50293C9.79129 6.50293 10.1629 6.87477 10.1631 7.33301V11.333C10.1631 11.7914 9.7914 12.1631 9.33301 12.1631C8.87472 12.163 8.50293 11.7913 8.50293 11.333V7.33301C8.50311 6.87485 8.87484 6.50306 9.33301 6.50293Z" fill="#DA2828"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33301 0.50293C9.90655 0.50293 10.4566 0.731298 10.8623 1.13672C11.2679 1.54227 11.4959 2.0925 11.4961 2.66602V3.16992H14C14.4584 3.16992 14.8301 3.5416 14.8301 4C14.8301 4.4584 14.4584 4.83008 14 4.83008H13.4961V13.333C13.4961 13.9068 13.268 14.4576 12.8623 14.8633C12.4566 15.2687 11.9065 15.4971 11.333 15.4971H4.66602C4.09255 15.4969 3.54227 15.2687 3.13672 14.8633C2.73109 14.4576 2.50293 13.9067 2.50293 13.333V4.83008H2C1.5416 4.83008 1.16992 4.4584 1.16992 4C1.16992 3.5416 1.5416 3.16992 2 3.16992H4.50293V2.66602C4.5031 2.0925 4.73117 1.54227 5.13672 1.13672C5.54228 0.731178 6.09249 0.503081 6.66602 0.50293H9.33301ZM4.16309 13.333C4.16309 13.4664 4.21623 13.5951 4.31055 13.6895C4.40479 13.7836 4.53281 13.8368 4.66602 13.8369H11.333C11.4663 13.8369 11.5941 13.7836 11.6885 13.6895C11.7829 13.5951 11.8359 13.4665 11.8359 13.333V4.83008H4.16309V13.333ZM6.66602 2.16309C6.53275 2.16324 6.4048 2.21632 6.31055 2.31055C6.21631 2.40478 6.16326 2.53276 6.16309 2.66602V3.16992H9.83594V2.66602C9.83576 2.53276 9.78271 2.40478 9.68848 2.31055C9.59413 2.21644 9.46629 2.16309 9.33301 2.16309H6.66602Z" fill="#DA2828"/>
        </g>
      </defs>
    </svg>

    <vue-tree
      ref="vuetree"
      :empty-text="''"
      :data="localTreeData"
      title-field="label"
      key-field="id"
      draggable
      droppable
      :default-expand-all="false"
      :show-line="true"
      :virtual="true"
      :animation="true"
      :before-drop-method="checkForCyclicDrop"
      style="height: 100%; width: 100%;"
      @node-dragstart="onDragStart"
      @node-drag-over="onNodeDragOver"
      @node-drop="onNodeDrop"
      @node-click="onNodeClick"
      @node-right-click="onNodeRightClick"
    >
      <template v-slot:node="{ node }">
        <svg v-if="node.type === 'Directory'" width="16" height="16" viewBox="0 0 16 16" style="margin-right:4px"><use href="#icon-folder"/></svg>
        <svg v-else width="16" height="16" viewBox="0 0 16 16" style="margin-right:4px"><use href="#icon-item"/></svg>
        <span
          v-if="editingNodeId !== node.id"
          class="tree-label"
          @dblclick="startRenameFromSlot(node)"
        >{{ node.label }}</span>
        <input
          v-else
          :ref="(el) => { if (el) editInputRefs[node.id] = el }"
          v-model="editLabel"
          @blur="finishRename(node)"
          @keyup.enter="finishRename(node)"
          @keyup.escape="cancelRename"
          @click.stop
        />
      </template>
    </vue-tree>

    <div v-if="localTreeData.length === 0" class="empty-state" @contextmenu.prevent="onEmptyAreaContextMenu">
      Right-click to create new items
    </div>

    <!-- контекстное меню без изменений -->
    <div
      v-if="contextMenu.visible"
      class="context-menu"
      :style="{ left: contextMenu.x + 'px', top: contextMenu.y + 'px' }"
      @mouseenter="cancelMenuClose"
      @mouseleave="onMenuMouseLeave"
    >
      <template v-if="contextMenu.node === null">
        <button @click="createRootNode('Directory')"><svg width="16" height="16" viewBox="0 0 16 16" style="margin-right:6px"><use href="#icon-folder"/></svg> New Folder</button>
        <button @click="createRootNode('Item')"><svg width="16" height="16" viewBox="0 0 16 16" style="margin-right:6px"><use href="#icon-item"/></svg> New Item</button>
      </template>
      <template v-else>
        <div class="menu-title">{{ contextMenu.node?.label || contextMenu.node?.id }}</div>
        <div class="menu-section-title">Create on this level</div>
        <button @click="createNode('after', 'Directory')"><svg width="16" height="16" viewBox="0 0 16 16" style="margin-right:6px"><use href="#icon-folder"/></svg> New Folder</button>
        <button @click="createNode('after', 'Item')"><svg width="16" height="16" viewBox="0 0 16 16" style="margin-right:6px"><use href="#icon-item"/></svg> New Item</button>
        <template v-if="contextMenu.node?.type === 'Directory'">
          <div class="menu-section-title">Create inside</div>
          <button @click="createNode('inside', 'Directory')"><svg width="16" height="16" viewBox="0 0 16 16" style="margin-right:6px"><use href="#icon-folder"/></svg> New Folder</button>
          <button @click="createNode('inside', 'Item')"><svg width="16" height="16" viewBox="0 0 16 16" style="margin-right:6px"><use href="#icon-item"/></svg> New Item</button>
        </template>
        <hr class="menu-divider">
        <button @click="startRename"><svg width="16" height="16" viewBox="0 0 16 16" style="margin-right:6px"><use href="#icon-edit"/></svg> Rename</button>
        <button @click="deleteNode"><svg width="16" height="16" viewBox="0 0 16 16" style="margin-right:6px"><use href="#icon-delete"/></svg> Delete</button>
      </template>
    </div>
    <div v-if="contextMenu.visible" class="context-menu-backdrop" @click="contextMenu.visible = false"></div>

    <!-- Модальное окно подтверждения удаления -->
    <div v-if="deleteModal.visible" class="delete-modal-backdrop" @click="closeDeleteModal">
      <div class="delete-modal" @click.stop>
        <p>{{ deleteModal.message }}</p>
        <div class="delete-modal-actions">
          <button @click="closeDeleteModal" class="cancel-btn">Cancel</button>
          <button
            @click="confirmDelete"
            :disabled="deleteModal.timer > 0"
            :class="{ 'danger-btn': deleteModal.timer === 0 }"
          >
            Delete {{ deleteModal.nestedCount > 0 ? deleteModal.nestedCount + ' element(s)' : '' }}
            <span v-if="deleteModal.timer > 0"> ({{ deleteModal.timer }})</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTree from '@wsfe/vue-tree';
import '@wsfe/vue-tree/style.css';

let tempCounter = 0;

function calcPosition(siblings, insertIndex) {
  const sorted = [...siblings].sort((a, b) => a.position_number - b.position_number);
  if (sorted.length === 0) return 1.0;
  const prev = sorted[insertIndex - 1] ?? null;
  const next = sorted[insertIndex] ?? null;
  if (!prev && next) return next.position_number / 2;
  if (prev && !next) return prev.position_number + 1.0;
  return (prev.position_number + next.position_number) / 2;
}

function findNodeContext(id, tree) {
  const search = (nodes, parent) => {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].id === id) return { node: nodes[i], parent, siblings: nodes, indexInSiblings: i };
      if (nodes[i].children) {
        const result = search(nodes[i].children, nodes[i]);
        if (result) return result;
      }
    }
    return null;
  };
  return search(tree, null);
}

function collectAllIds(node) {
  let ids = [node.id];
  if (node.children) {
    for (const child of node.children) ids = ids.concat(collectAllIds(child));
  }
  return ids;
}

export default {
  components: { VueTree },
  props: {
    content: { type: Object, required: true }
  },
  data() {
    return {
      localTreeData: [],
      dragNodeId: null,
      oldParentId: null,
      contextMenu: {
        visible: false,
        x: 0,
        y: 0,
        node: null
      },
      menuCloseTimer: null,
      editingNodeId: null,
      editLabel: '',
      editInputRefs: {},
      deleteModal: {
        visible: false,
        node: null,
        allIds: [],
        nestedCount: 0,
        message: '',
        timer: 5,
        timerId: null,
      },
    };
  },
  watch: {
    'content.treeData': {
      handler(newData) {
        if (!Array.isArray(newData)) {
          this.localTreeData = [];
          return;
        }
        if (JSON.stringify(newData) === JSON.stringify(this.localTreeData)) return;

        const expandKeys = this.$refs.vuetree ? this.$refs.vuetree.getExpandKeys() : [];
        this.localTreeData = JSON.parse(JSON.stringify(newData));

        this.$nextTick(() => {
          if (this.$refs.vuetree && expandKeys.length > 0) {
            this.$refs.vuetree.setExpandKeys(expandKeys, true);
          }
        });
      },
      immediate: true
    }
  },
  beforeUnmount() {
    if (this.menuCloseTimer) {
      clearTimeout(this.menuCloseTimer);
      this.menuCloseTimer = null;
    }
    if (this.deleteModal.timerId) {
      clearInterval(this.deleteModal.timerId);
      this.deleteModal.timerId = null;
    }
  },
  methods: {
    // ── Проверка перед дропом ──
    checkForCyclicDrop(dragKey, dropKey, hoverPart) {
      if (dragKey === dropKey) return false;

      const targetNode = this.findNodeByKey(this.localTreeData, dropKey);
      if (targetNode && targetNode.type === 'Item' && hoverPart === 'body') {
        return false;
      }

      const dragNode = this.findNodeByKey(this.localTreeData, dragKey);
      return !this.isChildOf(dragNode, dropKey);
    },

    onNodeDragOver(dragNode, targetNode, hoverPart, tree, event) {
      if (targetNode && targetNode.type === 'Item' && hoverPart === 'body') {
        event.preventDefault();
      }
    },

    findNodeByKey(nodes, key) {
      for (const node of nodes) {
        if (node.id === key) return node;
        if (node.children && node.children.length) {
          const found = this.findNodeByKey(node.children, key);
          if (found) return found;
        }
      }
      return null;
    },

    isChildOf(parentNode, targetKey) {
      if (!parentNode || !parentNode.children) return false;
      for (const child of parentNode.children) {
        if (child.id === targetKey) return true;
        if (this.isChildOf(child, targetKey)) return true;
      }
      return false;
    },

    // ── Клик по узлу → выбор элемента ──
    onNodeClick(nodeInfo) {
      if (nodeInfo && nodeInfo.type === 'Item') {
        this.$emit('trigger-event', {
          name: 'item-selected',
          event: {
            nodeId: nodeInfo.id,
            collectionName: this.content.collectionName || null,
            companyId: this.content.companyId || null,
          },
        });
      }
    },

    // ── Контекстное меню ──
    onNodeRightClick(nodeInfo, event) {
      event.preventDefault();
      this.cancelMenuClose();
      this.contextMenu = {
        visible: true,
        x: event.clientX,
        y: event.clientY,
        node: nodeInfo ?? null,
      };
      this.$nextTick(() => this.adjustMenuPosition());
    },
    onEmptyAreaContextMenu(event) { this.onNodeRightClick(null, event); },
    onMenuMouseLeave() {
      this.menuCloseTimer = setTimeout(() => {
        this.contextMenu.visible = false;
        this.menuCloseTimer = null;
      }, 300);
    },
    cancelMenuClose() {
      if (this.menuCloseTimer) {
        clearTimeout(this.menuCloseTimer);
        this.menuCloseTimer = null;
      }
    },
    adjustMenuPosition() {
      if (!this.contextMenu.visible) return;
      const menu = this.$el.querySelector('.context-menu');
      if (!menu) return;
      const rect = menu.getBoundingClientRect();
      const overflowRight = rect.right - window.innerWidth;
      const overflowBottom = rect.bottom - window.innerHeight;
      if (overflowRight > 0) this.contextMenu.x -= overflowRight + 8;
      if (overflowBottom > 0) this.contextMenu.y -= overflowBottom + 8;
    },

    // ── Создание узлов ──
    createRootNode(type) {
      if (this.editingNodeId || this.deleteModal.visible) return;

      const position = calcPosition(this.localTreeData, this.localTreeData.length);
      const tempId = 'temp_' + Date.now() + '_' + (tempCounter++);
      const newNode = {
        id: tempId, label: 'New node', type,
        parent_directory_id: null, position_number: position,
        children: [],
      };

      if (this.localTreeData.length === 0) {
        // Первый узел: присваиваем новый массив, чтобы гарантированно перерисовать дерево
        // и избежать внутренней ошибки библиотеки при пустом корне.
        this.localTreeData = [newNode];
      } else {
        // Не пусто: используем метод append для сохранения состояния раскрытых узлов
        this.$refs.vuetree.append(newNode);
        this.localTreeData.push(newNode);
      }

      this.$emit('trigger-event', {
        name: 'create-node',
        event: {
          tempId: newNode.id,
          parentId: null,
          position,
          type,
          label: 'New node',
          collectionName: this.content.collectionName || null,
          companyId: this.content.companyId || null,
        },
      });
      this.contextMenu.visible = false;
    },

    createNode(action, type) {
      if (this.editingNodeId || this.deleteModal.visible) return;

      const targetNode = this.contextMenu.node;
      if (!targetNode) return;
      const ctx = findNodeContext(targetNode.id, this.localTreeData);
      if (!ctx) return;

      let parentId = null, siblings = [], insertIndex = 0;
      if (action === 'after') {
        parentId = ctx.parent?.id ?? null;
        siblings = ctx.siblings;
        insertIndex = ctx.indexInSiblings + 1;
      } else if (action === 'inside') {
        parentId = targetNode.id;
        siblings = ctx.node.children || [];
        insertIndex = siblings.length;
      }

      const position = calcPosition(siblings, insertIndex);
      const tempId = 'temp_' + Date.now() + '_' + (tempCounter++);
      const newNode = {
        id: tempId, label: 'New node', type,
        parent_directory_id: parentId, position_number: position,
        children: [],
      };

      if (action === 'inside') {
        this.$refs.vuetree.append(newNode, parentId);
        if (!ctx.node.children) ctx.node.children = [];
        ctx.node.children.push(newNode);
      } else if (action === 'after') {
        this.$refs.vuetree.insertAfter(newNode, targetNode.id);
        ctx.siblings.splice(insertIndex, 0, newNode);
      }

      this.$emit('trigger-event', {
        name: 'create-node',
        event: {
          tempId: newNode.id,
          parentId,
          position,
          type,
          label: 'New node',
          collectionName: this.content.collectionName || null,
          companyId: this.content.companyId || null,
        },
      });
      this.contextMenu.visible = false;
    },

    // ── Удаление через модальное окно ──
    deleteNode() {
      if (this.editingNodeId || this.deleteModal.visible) return;

      const node = this.contextMenu.node;
      if (!node) return;
      const ctx = findNodeContext(node.id, this.localTreeData);
      if (!ctx) return;

      const nestedCount = ctx.node.children ? collectAllIds(ctx.node).length - 1 : 0;
      const message = (node.type === 'Directory' && nestedCount > 0)
        ? `Delete "${node.label}"? This folder contains ${nestedCount} nested element(s). This action cannot be undone.`
        : `Delete "${node.label}"? This action cannot be undone.`;

      const allIds = collectAllIds(ctx.node);

      this.deleteModal = {
        visible: true,
        node,
        allIds,
        nestedCount,
        message,
        timer: 5,
        timerId: null,
      };
      this.contextMenu.visible = false;
      this.startDeleteTimer();
    },

    startDeleteTimer() {
      this.deleteModal.timer = 5;
      this.deleteModal.timerId = setInterval(() => {
        if (this.deleteModal.timer > 0) {
          this.deleteModal.timer--;
        } else {
          clearInterval(this.deleteModal.timerId);
        }
      }, 1000);
    },

    confirmDelete() {
      const { node, allIds } = this.deleteModal;
      const ctx = findNodeContext(node.id, this.localTreeData);
      this.$refs.vuetree.remove(node.id);
      if (ctx) {
        ctx.siblings.splice(ctx.indexInSiblings, 1);
      }

      this.$emit('trigger-event', {
        name: 'delete-node',
        event: {
          nodeId: node.id,
          nestedNodeIds: allIds,
          collectionName: this.content.collectionName || null,
          companyId: this.content.companyId || null,
        },
      });
      this.closeDeleteModal();
    },

    closeDeleteModal() {
      if (this.deleteModal.timerId) {
        clearInterval(this.deleteModal.timerId);
        this.deleteModal.timerId = null;
      }
      this.deleteModal.visible = false;
      this.deleteModal.node = null;
      this.deleteModal.allIds = [];
    },

    // ── Переименование ──
    startRename() {
      if (this.deleteModal.visible) return;
      const node = this.contextMenu.node;
      if (!node) return;
      this.editingNodeId = node.id;
      this.editLabel = node.label;
      this.contextMenu.visible = false;
      this.focusAndSelect(node.id);
    },

    startRenameFromSlot(node) {
      if (this.contextMenu.visible || this.deleteModal.visible) return;
      this.editingNodeId = node.id;
      this.editLabel = node.label;
      this.focusAndSelect(node.id);
    },

    focusAndSelect(nodeId) {
      this.$nextTick(() => {
        const input = this.editInputRefs[nodeId];
        if (input) {
          input.focus();
          input.select();
        }
      });
    },

    onRootMouseDown(e) {
      if (!this.editingNodeId) return;
      const input = this.editInputRefs[this.editingNodeId];
      if (input && !input.contains(e.target)) {
        this.cancelRename();
      }
    },

    finishRename(node) {
      if (!this.editingNodeId) return;
      const newLabel = this.editLabel.trim();
      if (newLabel && newLabel !== node.label) {
        this.$refs.vuetree.updateNode(node.id, { label: newLabel });
        const ctx = findNodeContext(node.id, this.localTreeData);
        if (ctx) ctx.node.label = newLabel;

        this.$emit('trigger-event', {
          name: 'node-rename',
          event: {
            nodeId: node.id,
            oldLabel: node.label,
            newLabel,
            collectionName: this.content.collectionName || null,
            companyId: this.content.companyId || null,
          },
        });
      }
      this.editingNodeId = null;
    },

    cancelRename() {
      this.editingNodeId = null;
    },

    // ── Drag & Drop ──
    onDragStart(nodeInfo) {
      if (!nodeInfo) return;
      this.dragNodeId = nodeInfo.id;
      const ctx = findNodeContext(nodeInfo.id, this.localTreeData);
      this.oldParentId = ctx?.parent?.id ?? null;
    },
    onNodeDrop(targetNodeInfo, dragEvent, hoverPart) {
      if (!this.dragNodeId) return;
      const nodeId = this.dragNodeId;
      if (hoverPart === 'body' && targetNodeInfo.type === 'Item') return;

      const sourceCtx = findNodeContext(nodeId, this.localTreeData);
      if (!sourceCtx) {
        this.dragNodeId = null;
        this.oldParentId = null;
        return;
      }

      let newParentId = null, targetSiblings = [], insertIndex = 0;
      const targetCtx = findNodeContext(targetNodeInfo.id, this.localTreeData);
      if (!targetCtx) return;

      if (hoverPart === 'body') {
        newParentId = targetNodeInfo.id;
        targetSiblings = (targetCtx.node.children || []).filter(n => n.id !== nodeId);
        insertIndex = targetSiblings.length;
      } else if (hoverPart === 'before') {
        newParentId = targetCtx.parent?.id ?? null;
        targetSiblings = targetCtx.siblings.filter(n => n.id !== nodeId);
        insertIndex = targetSiblings.findIndex(n => n.id === targetNodeInfo.id);
      } else if (hoverPart === 'after') {
        newParentId = targetCtx.parent?.id ?? null;
        targetSiblings = targetCtx.siblings.filter(n => n.id !== nodeId);
        insertIndex = targetSiblings.findIndex(n => n.id === targetNodeInfo.id) + 1;
      } else {
        this.dragNodeId = null;
        this.oldParentId = null;
        return;
      }

      sourceCtx.siblings.splice(sourceCtx.indexInSiblings, 1);
      if (newParentId) {
        const parentCtx = findNodeContext(newParentId, this.localTreeData);
        if (parentCtx && parentCtx.node) {
          if (!parentCtx.node.children) parentCtx.node.children = [];
          parentCtx.node.children.splice(insertIndex, 0, sourceCtx.node);
        }
      } else {
        this.localTreeData.splice(insertIndex, 0, sourceCtx.node);
      }

      const newPosition = calcPosition(targetSiblings, insertIndex);
      sourceCtx.node.parent_directory_id = newParentId;
      sourceCtx.node.position_number = newPosition;

      this.$emit('trigger-event', {
        name: 'node-drop',
        event: {
          nodeId,
          newParentId: newParentId,
          oldParentId: this.oldParentId,
          newPosition,
          positionType: hoverPart,
          collectionName: this.content.collectionName || null,
          companyId: this.content.companyId || null,
        },
      });

      this.dragNodeId = null;
      this.oldParentId = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.ww-smart-tree { width: 100%; height: 100%; position: relative; }
.tree-label { font-size: 14px; line-height: 1.4; }
.empty-state {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  font-style: italic;
  z-index: 1;
}
.context-menu-backdrop { position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 999; }
.context-menu { position: fixed; background: white; border: 1px solid #ccc; box-shadow: 2px 2px 8px rgba(0,0,0,0.15); z-index: 1000; padding: 8px 0; min-width: 220px; font-size: 14px; }
.context-menu .menu-title { padding: 4px 12px; font-weight: bold; border-bottom: 1px solid #eee; margin-bottom: 4px; }
.context-menu .menu-section-title { padding: 4px 12px; font-size: 11px; text-transform: uppercase; color: #999; margin-top: 4px; }
.context-menu hr.menu-divider { margin: 4px 0; border: 0; border-top: 1px solid #eee; }
.context-menu button { display: flex; align-items: center; width: 100%; text-align: left; padding: 6px 12px; background: none; border: none; cursor: pointer; }
.context-menu button:hover { background: #f0f0f0; }

/* стили для модального окна удаления */
.delete-modal-backdrop {
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.4); z-index: 2000; display: flex; justify-content: center; align-items: center;
}
.delete-modal {
  background: white; padding: 24px; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.2); max-width: 400px; width: 100%;
}
.delete-modal p { margin: 0 0 16px; font-size: 14px; }
.delete-modal-actions { display: flex; justify-content: flex-end; gap: 8px; }
.delete-modal-actions button {
  padding: 8px 16px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; font-size: 14px;
}
.cancel-btn { background: #f5f5f5; }
.cancel-btn:hover { background: #e5e5e5; }
.danger-btn { background: #d32f2f; color: white; border-color: #d32f2f; }
.danger-btn:disabled { background: #ccc; color: #666; border-color: #ccc; cursor: not-allowed; }
</style>